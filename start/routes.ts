/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/','#controllers/home_controller.index').as('home')


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


}).prefix("/admin").as("admin")