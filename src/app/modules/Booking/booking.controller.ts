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

export const bookingController = {
  createBooking,
}
