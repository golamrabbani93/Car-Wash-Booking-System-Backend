/* eslint-disable no-unused-expressions */
import { TSlot } from '../Slot/slot.interface'
import { Slot } from '../Slot/slot.model'
import { TService } from './service.interface'
import { Service } from './service.model'
import createSlots from './service.utils'

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

const updateServiceIntoDB = async (id: string, payload: Partial<TService>) => {
  const result = await Service.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteServiceFromDB = async (id: string) => {
  const result = await Service.findByIdAndDelete(id, {
    new: true,
  })
  return result
}

// !Create Slots And Save To Databse
const createSlotsIntoDB = async (payload: TSlot) => {
  const getAllSlots = createSlots(payload)

  const result = await Slot.create(getAllSlots)
  return result
}
export const allServices = {
  createServiceIntoDB,
  getAllServicesFromDB,
  getSingleServiceFromDB,
  updateServiceIntoDB,
  deleteServiceFromDB,
  createSlotsIntoDB,
}
