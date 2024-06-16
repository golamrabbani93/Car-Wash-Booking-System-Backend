import { Slot } from './slot.model'

// !Get getAvailableSoltsFromDB
const getAvailableSoltsFromDB = async (query: Record<string, unknown>) => {
  const result = await Slot.find({
    $and: [
      { service: query?.serviceId },
      { date: query?.date },
      { isBooked: 'available' },
    ],
  }).populate('service')
  return result
}

export const slotsServices = {
  getAvailableSoltsFromDB,
}
