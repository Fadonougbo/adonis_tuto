import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { handler as ssrHandler } from '../../dist/server/entry.mjs';

export default class AstromiMiddleware {
  async handle({request,response}: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
  
    await ssrHandler(request.request,response.response)
    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}