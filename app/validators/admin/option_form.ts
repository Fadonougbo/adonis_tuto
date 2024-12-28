import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new property form.
 */
export const createOptionFormValidator = vine.compile(
  vine.object({
    name:vine.string().minLength(4),
  }).bail(true)
)

/**
 * Validator to validate the payload when updating
 * an existing property form.
 */
export const updateOptionFormValidator = vine.compile(
  vine.object({
    name:vine.string().minLength(4),
  }).bail(true)
)