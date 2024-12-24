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

    router.get("property/create","#controllers/admin/properties_controller.create").as("property.create")

    router.post("property/create","#controllers/admin/properties_controller.store").as("property.store")

    router.get("property","#controllers/admin/properties_controller.index").as("index")


}).prefix("/admin").as("admin")