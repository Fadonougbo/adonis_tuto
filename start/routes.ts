/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.get('/','#controllers/home_controller.index').as('home')

router.post('property/contact/:property','#controllers/listings_controller.contact').as('property.contact').where('property',router.matchers.number())

router.group(()=> {

    router.get('/','#controllers/listings_controller.index').as('listings')

    router.get('/:slug/:property','#controllers/listings_controller.show').as('property.show').where('property',router.matchers.number()).where('slug',router.matchers.slug())

    
}).prefix('/listings')

router.group(()=> {
    
    /* Property */
    router.get("property","#controllers/admin/properties_controller.index").as("index")

    router.get("property/create","#controllers/admin/properties_controller.create").as("property.create")

    router.post("property/create","#controllers/admin/properties_controller.store").as("property.store")

    router.get("property/edit/:property","#controllers/admin/properties_controller.edit").as("property.edit")
 
    router.patch("property/update/:property","#controllers/admin/properties_controller.update").as("property.update")

    router.delete("property/delete/:property","#controllers/admin/properties_controller.destroy").as("property.destroy")

    /* Options */
    router.get("option","#controllers/admin/options_controller.index").as("option.index")

    router.get("option/create","#controllers/admin/options_controller.create").as("option.create")

    router.post("option/create","#controllers/admin/options_controller.store").as("option.store")

    router.get("option/edit/:option","#controllers/admin/options_controller.edit").as("option.edit")
 
    router.patch("option/update/:option","#controllers/admin/options_controller.update").as("option.update")

    router.delete("option/delete/:option","#controllers/admin/options_controller.destroy").as("option.destroy")


}).prefix("/admin").as("admin").use(middleware.auth())

router.get('/login','#controllers/auth_controller.login').as('login').use(middleware.guest())

router.post('/login','#controllers/auth_controller.doLogin')

router.post('/logout','#controllers/auth_controller.logout').as('logout').use(middleware.auth())