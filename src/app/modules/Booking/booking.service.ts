import mongoose, { Schema, model } from 'mongoose'
import { TBooking } from './booking.interface'

export const BookingSchema = new Schema<TBooking>({
  customer: {
    Type: mongoose.Types.ObjectId,
    required: [true, 'Customer Id Is Required'],
  },
  service: {
    Type: mongoose.Types.ObjectId,
    required: [true, 'Service Id Is Required'],
  },
  slot: {
    Type: mongoose.Types.ObjectId,
    required: [true, 'Slot Id Is Required'],
  },
  vehicleType: {
    Type: String,
    required: [true, 'Vehicle Type Is Required'],
  },
  vehicleBrand: {
    Type: String,
    required: [true, 'Vehicle Brand Is Required'],
  },
  vehicleModel: {
    Type: String,
    required: [true, 'Vehicle Model Is Required'],
  },
  manufacturingYear: {
    Type: Number,
    required: [true, 'Manufacturing Year Is Required'],
  },
  registrationPlate: {
    Type: String,
    required: [true, 'Vehicle Registration Plate Is Required'],
  },
})

export const Booking = model<TBooking>('Booking', BookingSchema)
