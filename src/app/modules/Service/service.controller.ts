import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import { allServices } from './service.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

// !Create Service
const createService = catchAsync(async (req: Request, res: Response) => {
  const serviceData = req.body
  const result = await allServices.createServiceIntoDB(serviceData)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service created successfully',
    data: result,
  })
})

export const serviceControllers = {
  createService,
}
