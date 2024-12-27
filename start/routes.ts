/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')


router.group(()=> {
    
    router.get("property","#controllers/admin/properties_controller.index").as("index")

    router.get("property/create","#controllers/admin/properties_controller.create").as("property.create")

    router.post("property/create","#controllers/admin/properties_controller.store").as("property.store")

    router.get("property/edit/:property","#controllers/admin/properties_controller.show").as("property.show")
 
    router.patch("property/edit/:property","#controllers/admin/properties_controller.edit").as("property.edit")

    router.delete("property/delete/:property","#controllers/admin/properties_controller.destroy").as("property.destroy")



}).prefix("/admin").as("admin")