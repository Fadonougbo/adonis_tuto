import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new property form.
 */
export const createPropertyFormValidator = vine.compile(
  vine.object({
    title:vine.string().minLength(4),
    description:vine.string(),
    surface:vine.number(),
    rooms:vine.number(),
    price:vine.number().min(3),
    city:vine.string(),
    is_sold:vine.boolean().optional(),
    tel:vine.string()
  }).bail(true)
)

/**
 * Validator to validate the payload when updating
 * an existing property form.
 */
export const updatePropertyFormValidator = vine.compile(
  vine.object({
    title:vine.string().minLength(4),
    description:vine.string(),
    surface:vine.number(),
    rooms:vine.number(),
    price:vine.number().min(3),
    city:vine.string(),
    is_sold:vine.boolean().optional(),
    tel:vine.string()
  }).bail(true)
)