import vine from '@vinejs/vine'

export const searchFormValidator = vine.compile(
    vine.object({
      surface:vine.number().positive().optional(),
      budget:vine.number().positive().optional(),
      rooms:vine.number().positive().optional(),
      keywords:vine.string().trim().optional()

    }).bail(true)
  )