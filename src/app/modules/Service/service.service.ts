import { TService } from './service.interface'
import { Service } from './service.model'

// *Create service and Save In to Databse
const createServiceIntoDB = async (payload: TService) => {
  const result = await Service.create(payload)
  return result
}

export const allServices = {
  createServiceIntoDB,
}
