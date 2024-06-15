import { z } from 'zod'

const createSlotVlaidationSchema = z.object({
  body: z.object({
    service: z.string({
      invalid_type_error: 'Service Id must be string',
      required_error: 'Service Id is required',
    }),
    date: z.string({
      invalid_type_error: 'Date must be string (Date Formate:("YYYY-MM-DD"))',
      required_error: 'Date  is required (Date Formate:("YYYY-MM-DD"))',
    }),
    startTime: z.string({
      invalid_type_error: 'Start Time must be string (Time Format:("HH:MM"))',
      required_error: 'Start Time is required (Time Format:("HH:MM"))',
    }),
    endTime: z.string({
      invalid_type_error: 'End Time must be string (Time Format:("HH:MM"))',
      required_error: 'End Time is required (Time Format:("HH:MM"))',
    }),
  }),
})

export const slotValidation = {
  createSlotVlaidationSchema,
}
