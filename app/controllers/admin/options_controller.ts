import type { HttpContext } from '@adonisjs/core/http'
import { bind } from '@adonisjs/route-model-binding'
import Option from '#models/admin/option'
import { createOptionFormValidator, updateOptionFormValidator } from '#validators/admin/option_form'

export default class OptionsController {
  /**
   * Display a list of resource
   */
  async index({request,view}: HttpContext) {

    const currentPage=request.input("page",1)
    
        const url=request.url()
    
        const options= ( (await Option.query().orderBy("id","desc").paginate(currentPage,12)).baseUrl(url) )
    
        return view.render("components/admin/option/index",{options})
  }

  /**
   * Display form to create a new record
   */
  async create({view}: HttpContext) {

     const option=new Option()
        
     return view.render("components/admin/option/create",{option});
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request,session,response }: HttpContext) {

    const res=await  request.validateUsing(createOptionFormValidator)
    
        await Option.create(res)
    
        session.flash("success","Element ajouté avec success")
    
       return response.redirect().toRoute("admin.option.index");
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  @bind()
  async edit({ view }: HttpContext,option:Option) {
    return view.render("components/admin/option/create",{option});
  }

  /**
   * Handle form submission for the edit action
   */
  @bind()
  async update({ session,response, request }: HttpContext,option:Option) {

    const data=await request.validateUsing(updateOptionFormValidator)
        
    await option.merge(data).save()

    session.flash("success","Element modifié avec success")

    return response.redirect().toRoute("admin.option.index");
  }

  /**
   * Delete record
   */
  @bind()
  async destroy({ session,response }: HttpContext,option:Option) {
    await option.delete()

    session.flash("success","Element supprimé avec success")

    return response.redirect().toRoute("admin.option.index");
  }
}