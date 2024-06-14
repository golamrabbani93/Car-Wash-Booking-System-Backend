import { z } from 'zod'

const createServiceValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be string',
      required_error: 'Name is required',
    }),
    description: z.string({
      invalid_type_error: 'Description must be string',
      required_error: 'Description is required',
    }),
    price: z
      .number({
        invalid_type_error: 'Price must be number',
        required_error: 'Price is required',
      })
      .min(1),
    duration: z.number({
      invalid_type_error: 'Duration must be number. Ex:60(Duration in minutes)',
      required_error: 'Duration is required',
    }),
    isDeleted: z.boolean({
      invalid_type_error: 'Is Deleted must be False',
      required_error: 'Is Deleted is required',
    }),
  }),
})

const updateServiceValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Name must be string',
        required_error: 'Name is required',
      })
      .optional(),
    description: z
      .string({
        invalid_type_error: 'Description must be string',
        required_error: 'Description is required',
      })
      .optional(),
    price: z
      .number({
        invalid_type_error: 'Price must be number',
        required_error: 'Price is required',
      })
      .min(1)
      .optional(),
    duration: z
      .number({
        invalid_type_error:
          'Duration must be number. Ex:60(Duration in minutes)',
        required_error: 'Duration is required',
      })
      .optional(),
    isDeleted: z
      .boolean({
        invalid_type_error: 'Is Deleted must be False',
        required_error: 'Is Deleted is required',
      })
      .optional(),
  }),
})

export const ServiceValidation = {
  createServiceValidationSchema,
  updateServiceValidationSchema,
}
