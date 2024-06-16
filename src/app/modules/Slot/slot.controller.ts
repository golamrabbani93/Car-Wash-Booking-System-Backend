import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { slotsServices } from './slot.service'

const getAvailableSolts = catchAsync(async (req: Request, res: Response) => {
  const query = req.query
  const result = await slotsServices.getAvailableSoltsFromDB(query)
  if (result.length > 0) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Available slots retrieved successfully',
      data: result,
    })
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Available slots retrieved For this Date',
      data: [],
    })
  }
})

export const slotsControllers = {
  getAvailableSolts,
}
