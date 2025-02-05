import vine from '@vinejs/vine'

export const propertyContactValidator = vine.compile(
    vine.object({
     firstname:vine.string().minLength(2),
     lastname:vine.string().minLength(2),
     tel:vine.string().minLength(2),
     email:vine.string().email(),
     message:vine.string().minLength(4)
    }).bail(true)
  )
  