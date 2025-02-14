import type { HttpContext } from '@adonisjs/core/http'
import Property from '#models/admin/property'


export default class HomeController {
  /**
   * Display a list of resource
   */
  async index({view}: HttpContext) {
    const properties=await Property.query().limit(4);
   
    return view.render('components/home/home',{properties})
  }

}