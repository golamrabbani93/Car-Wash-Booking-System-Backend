import mongoose, { Schema, model } from 'mongoose'
import { TBooking } from './booking.interface'

export const BookingSchema = new Schema<TBooking>({
  customerId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  serviceId: {
    type: mongoose.Schema.ObjectId,
    required: [true, 'Service Id Is Required'],
    ref: 'Service',
  },
  slotId: {
    type: mongoose.Schema.ObjectId,
    required: [true, 'Slot Id Is Required'],
    ref: 'Slot',
  },
  vehicleType: {
    type: String,
    required: [true, 'Vehicle Type Is Required'],
  },
  vehicleBrand: {
    type: String,
    required: [true, 'Vehicle Brand Is Required'],
  },
  vehicleModel: {
    type: String,
    required: [true, 'Vehicle Model Is Required'],
  },
  manufacturingYear: {
    type: Number,
    required: [true, 'Manufacturing Year Is Required'],
  },
  registrationPlate: {
    type: String,
    required: [true, 'Vehicle Registration Plate Is Required'],
    unique: true,
  },
})

export const Booking = model<TBooking>('Booking', BookingSchema)
