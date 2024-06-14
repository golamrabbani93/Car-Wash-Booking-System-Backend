import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TService } from './service.interface'
import { Service } from './service.model'

// *Create service and Save In to Databse
const createServiceIntoDB = async (payload: TService) => {
  const result = await Service.create(payload)
  return result
}

// *get Single service from Database
const getSingleServiceFromDB = async (id: string) => {
  const result = await Service.findById(id)

  if (!result) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This Service Not Exists In Database',
    )
  }
  return result
}
export const allServices = {
  createServiceIntoDB,
  getSingleServiceFromDB,
}
