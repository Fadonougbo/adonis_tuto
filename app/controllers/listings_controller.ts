import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper';
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
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

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