import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper';
import { bind } from '@adonisjs/route-model-binding';
import Property from '#models/admin/property';
import { createPropertyFormValidator, updatePropertyFormValidator } from '#validators/admin/property_form';

export default class PropertiesController {
  
  /**
   * Display a list of resource
   */
  async index({view,request}: HttpContext) {

    const currentPage=request.input("page",1)

    const url=request.url()

    const properties= ( (await Property.query().orderBy("id","desc").paginate(currentPage,12)).baseUrl(url) )

    return view.render("components/admin/index",{properties})
  }

  /**
   * Display form to create a new record
   */
  async create({view}: HttpContext) {

    const property=new Property()
    return view.render("components/admin/create",{property});
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
  async show() {
    
   
  }

  /**
   * Edit individual record
   */
  @bind()
  async edit({ view}: HttpContext,property:Property) {

    return view.render("components/admin/create",{property});
   
    
  }

  /**
   * Handle form submission for the edit action
   */
  @bind()
  async update({ request,session,response }: HttpContext,property:Property) {

    const data=await request.validateUsing(updatePropertyFormValidator)
    
    await property.merge({...data,is_sold:data.is_sold?true:false }).save()

    session.flash("success","Element modifié avec success")

    return response.redirect().toRoute("admin.index");
  }

  /**
   * Delete record
   */
  @bind()
  async destroy({ session,response }: HttpContext,property:Property) {

    await property.delete()

    session.flash("success","Element supprimé avec success")

    return response.redirect().toRoute("admin.index");

  }
}