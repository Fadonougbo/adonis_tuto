import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { handler as ssrHandler } from '../../public/server/entry.mjs';


export default class Astromi2Middleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    console.log(ctx)
    ssrHandler()

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}