import mongoose, { Schema, model } from 'mongoose'
import { TSlot } from './slot.interface'

const slotSchema = new Schema<TSlot>(
  {
    service: {
      type: mongoose.Schema.ObjectId,
      required: [true, 'Service Id is Required'],
      ref: 'Service',
    },
    date: {
      type: String,
      required: [true, 'Date Id is Required'],
    },
    startTime: {
      type: String,
      required: [true, 'Start Time is Required'],
    },
    endTime: {
      type: String,
      required: [true, 'End Time is Required'],
    },
    isBooked: {
      type: String,
      default: 'available',
    },
  },
  {
    timestamps: true,
  },
)

export const Slot = model<TSlot>('Slot', slotSchema)
