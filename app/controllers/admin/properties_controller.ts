import type { HttpContext } from '@adonisjs/core/http'
import { bind } from '@adonisjs/route-model-binding';
import Option from '#models/admin/option';
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
    const options=(await Option.query().select(['id','name']))

    const propertyOptions: never[]=[]

    return view.render("components/admin/create",{property,options,propertyOptions});
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request,response,session }: HttpContext) {

 
    const res=await  request.validateUsing(createPropertyFormValidator)

    const {options,...formdata}=res

    const property=await Property.create(formdata)

    if(options) {
      property.related('options').sync(options)
    }

    session.flash("success","Element ajouté avec success")

   return response.redirect().toRoute("admin.index");
  }

  /**
   * Edit individual record
   */
  @bind()
  async edit({ view}: HttpContext,property:Property) {

    const options=(await Option.query().select(['id','name']))

    await property.load('options',(query)=> {
        query.select(['id'])
    })

    //Je recupere un tableau d'ID
    const propertyOptions=property.options.map((option)=>option.id)
    

    return view.render("components/admin/create",{property,options,propertyOptions});
   
    
  }

  /**
   * Handle form submission for the edit action
   */
  @bind()
  async update({ request,session,response }: HttpContext,property:Property) {
    
    const data=await request.validateUsing(updatePropertyFormValidator)

    //j'extraire options des donnees car il n'existe pas de champ options dans la BD
    const {options,...formdata}=data

    await property.merge({...formdata,is_sold:data.is_sold?true:false }).save()

    //je supprime les anciennes liaisons
    await property.related('options').sync([])

    //liaison property option
    if(options) {
      await property.related('options').sync(options)
    }
    
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