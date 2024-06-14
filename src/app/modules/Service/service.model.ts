import { Schema, model } from 'mongoose'
import { TService } from './service.interface'

const ServiceSchema = new Schema<TService>(
  {
    name: {
      type: String,
      required: [true, 'Name is Required'],
    },
    description: {
      type: String,
      required: [true, 'Description is Required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is Required'],
    },
    duration: {
      type: Number,
      required: [true, 'Duration is Required'],
    },
    isDeleted: {
      type: Boolean,
      required: [true, 'Duration is Required'],
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

export const Service = model<TService>('Service', ServiceSchema)
