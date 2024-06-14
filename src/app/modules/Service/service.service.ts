import { TService } from './service.interface'
import { Service } from './service.model'

// *Create service and Save In to Databse
const createServiceIntoDB = async (payload: TService) => {
  const result = await Service.create(payload)
  return result
}

// *get All services from Database
const getAllServicesFromDB = async () => {
  const result = await Service.find()
  return result
}

// *get Single service from Database
const getSingleServiceFromDB = async (id: string) => {
  const result = await Service.findById(id)
  return result
}

// !Update a Service

const updateServiceFromDB = async (id: string, payload: Partial<TService>) => {
  const result = await Service.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

export const allServices = {
  createServiceIntoDB,
  getAllServicesFromDB,
  getSingleServiceFromDB,
  updateServiceFromDB,
}
