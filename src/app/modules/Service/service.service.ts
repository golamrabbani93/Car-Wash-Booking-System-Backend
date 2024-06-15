/* eslint-disable no-unused-expressions */
import { TSlot } from '../Slot/slot.interface'
import { Slot } from '../Slot/slot.model'
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
  const { service, startTime, date, endTime } = payload

  const startTimeMinutes = Number(startTime.split(':')[0]) * 60
  const endTimeMinutes = Number(endTime.split(':')[0]) * 60

  const totalDuration = endTimeMinutes - startTimeMinutes

  const numberOfSlots: (number | undefined)[] = new Array(
    totalDuration / 60,
  ).fill(1)

  const newSlots = numberOfSlots.map((slot, index: number) => {
    return {
      service,
      date,
      startTime:
        Number(startTime.split(':')[0]) + index < 10
          ? `0${Number(startTime.split(':')[0]) + index}:00`
          : `${Number(startTime.split(':')[0]) + index}:00`,
      endTime: `${Number(startTime.split(':')[0]) + index + 1}:00`,
    }
  })

  const result = await Slot.create(newSlots)
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
