import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper';
import { bind } from '@adonisjs/route-model-binding';
import Property from '#models/admin/property';
import { searchFormValidator } from '#validators/search';

export default class ListingsController {
  /**
   * Display a list of resource
   */
  async index({view,request}: HttpContext) {

    const {surface,budget,keywords,rooms}=await request.validateUsing(searchFormValidator)

    const query=Property.query()

    if(surface) {
        query.where('surface','>=',surface)
    }

    if(budget) {
      query.where('price','<=',budget)
    }

    if(rooms) {
      query.where('rooms','>=',rooms)
    }
    
    if(keywords) {
     
      query.whereILike('title',`%${keywords}%`)
    }
    
    const url=request.url()

    const currentPage=request.input('page',1)

    const properties=(await query.orderBy('id','desc').paginate(currentPage,20)).baseUrl(url)
    
    return view.render('components/listing/listing',{properties,inputes:request.all()});

  }


  /**
   * Show individual record
   */
  @bind()
  async show({ response,view }: HttpContext,slug:string,property:Property) {
    
    const propertySlug=property.getSlug()

    if(slug !== propertySlug) {
      return response.redirect().toRoute('property.show',{slug:propertySlug,property:property.id})
    }

    await property.load('options',(query)=>{
      query.select('name')
    })
   
    return view.render('components/show/show',{property,options:property.options})

  }

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