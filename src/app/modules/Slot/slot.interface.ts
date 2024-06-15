import { Types } from 'mongoose'

export type TIsBooked = 'available' | 'canceled' | 'booked'

export interface TSlot {
  service: Types.ObjectId
  date: string
  startTime: string
  endTime: string
  isBooked?: TIsBooked
}
