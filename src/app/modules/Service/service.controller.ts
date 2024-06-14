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

// !Get All Services
const getAllServices = catchAsync(async (req: Request, res: Response) => {
  const result = await allServices.getAllServicesFromDB()
  if (result.length > 0) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Services retrieved successfully',
      data: result,
    })
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: [],
    })
  }
})

// !Get A Service
const getSingleService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await allServices.getSingleServiceFromDB(id)
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service retrieved successfully',
      data: result,
    })
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: [],
    })
  }
})

export const serviceControllers = {
  createService,
  getAllServices,
  getSingleService,
}
