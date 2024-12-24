import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper';
import Property from '#models/admin/property';
import { createPropertyFormValidator } from '#validators/admin/property_form';

export default class PropertiesController {
  
  /**
   * Display a list of resource
   */
  async index({view}: HttpContext) {

    const properties=await Property.all()

    return view.render("components/admin/index",{properties})
  }

  /**
   * Display form to create a new record
   */
  async create({view}: HttpContext) {

    return view.render("components/admin/create");
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request,response,session }: HttpContext) {

    
    const res=await  request.validateUsing(createPropertyFormValidator)

    await Property.create(res)

    session.flash("success","Element ajouté avec success")

   return response.redirect().toRoute("admin.index");
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}