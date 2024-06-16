import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { Service } from '../Service/service.model'
import { TBooking } from './booking.interface'
import { Slot } from '../Slot/slot.model'
import mongoose from 'mongoose'
import { Booking } from './booking.model'
import { JwtPayload } from 'jsonwebtoken'

// !Create booking
const createBookingIntoDB = async (userData: JwtPayload, payload: TBooking) => {
  // !Check service exists or not
  const isExistsService = await Service.findById(payload.serviceId)
  if (!isExistsService) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This Service Not Exists In Database',
    )
  }
  //   !Check service exists or not and check slots is available or not
  const isExistsSlots = await Slot.findById(payload.slotId)
  if (!isExistsSlots) {
    throw new AppError(httpStatus.NOT_FOUND, 'This Slot Not Exists In Database')
  } else if (isExistsSlots?.isBooked !== 'available') {
    throw new AppError(
      httpStatus.NOT_FOUND,
      `This Slot Already ${isExistsSlots?.isBooked}`,
    )
  }

  const session = await mongoose.startSession()
  try {
    session.startTransaction()

    // !Update slots isBooked field

    const updatedSlot = await Slot.findByIdAndUpdate(
      payload?.slotId,
      {
        isBooked: 'booked',
      },
      {
        new: true,
        session,
      },
    )

    if (!updatedSlot) {
      throw new AppError(httpStatus.NOT_FOUND, 'Faild To Create Booking')
    }

    const customerId = userData?.userId
    // !Create Booking
    const createdBooking = await Booking.create([{ ...payload, customerId }], {
      session,
    })
    if (!createdBooking.length) {
      throw new AppError(httpStatus.NOT_FOUND, 'Faild To Create Booking')
    }

    await session.commitTransaction()

    await session.endSession()

    //! Find and populate the booking with new created Booking
    const bookingId = createdBooking[0]._id
    const result = await Booking.findById(bookingId)
      .populate('customerId')
      .populate('serviceId')
      .populate('slotId')
    return result
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw new AppError(httpStatus.BAD_REQUEST, 'Faild To Create Booking')
  }
}

// !Get all Bookings

const getAllBookingsFromDB = async () => {
  const result = await Booking.find()
    .populate('customerId')
    .populate('serviceId')
    .populate('slotId')

  return result
}
export const bookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
}
