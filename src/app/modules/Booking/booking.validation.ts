import { z } from 'zod'

const createBookingvalidationSchema = z.object({
  body: z.object({
    customer: z.string({
      invalid_type_error: 'customer id must be string',
      required_error: 'customer id is required',
    }),
    service: z.string({
      invalid_type_error: 'service id must be string',
      required_error: 'service id is required',
    }),
    slot: z.string({
      invalid_type_error: 'slot id must be string',
      required_error: 'slot id is required',
    }),
    vehicleType: z.string({
      invalid_type_error: 'vehicleType must be string',
      required_error: 'vehicleType is required',
    }),
    vehicleBrand: z.string({
      invalid_type_error: 'vehicleBrand must be string',
      required_error: 'vehicleBrand is required',
    }),
    vehicleModel: z.string({
      invalid_type_error: 'vehicleModel must be string',
      required_error: 'vehicleModel is required',
    }),
    manufacturingYear: z.number({
      invalid_type_error: 'manufacturingYear must be number',
      required_error: 'manufacturingYear is required',
    }),
    registrationPlate: z.string({
      invalid_type_error: 'registrationPlate must be string',
      required_error: 'registrationPlate is required',
    }),
  }),
})


export const BookingValidation={
    createBookingvalidationSchema
}