import vine from '@vinejs/vine'

export const loginFormValidator = vine.compile(
    vine.object({
     email:vine.string().email().exists({table:'users',column:'email'}),
     password:vine.string().minLength(2)

    }).bail(true)
  )