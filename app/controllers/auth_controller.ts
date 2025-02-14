 import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { loginFormValidator } from '#validators/login'

export default class AuthController {

    async login({view}:HttpContext) {
      
        return view.render('components/auth/login')
    }

    async doLogin({request,auth,session,response}:HttpContext) {
       
        const {email,password}=await request.validateUsing(loginFormValidator)

        const user=await User.verifyCredentials(email,password)

        auth.use('web').login(user)
        
        session.regenerate()

        return response.redirect().toRoute('admin.index')
    }

    async logout({auth,response,session}:HttpContext) {

        await auth.use('web').logout()

        session.regenerate()

        return response.redirect().toRoute('home')
    }
}