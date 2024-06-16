import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { bookingServices } from './booking.service'

// !Create Booking
const createBooking = catchAsync(async (req: Request, res: Response) => {
  const { user } = req
  const bookingData = req.body
  const result = await bookingServices.createBookingIntoDB(user, bookingData)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking successful',
    data: result,
  })
})

// !Get All Bookings
const getAllBookings = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingServices.getAllBookingsFromDB()

  if (!result.length) {
    sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'No Data Found',
      data: [],
    })
  } else {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'All bookings retrieved successfully',
      data: result,
    })
  }
})

export const bookingController = {
  createBooking,
  getAllBookings,
}
