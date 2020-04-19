'use strict'
const User = use("App/Models/User")
class SessionController {
    async create ({ request, auth }) { 
        const { email, password } = request.all()
            
        const token = await auth.attempt(email, password)

        const {id,adminAcess} = await User.findBy('email', email)

        const user = {
          ids:{
            id:id,
            access:adminAcess
          },
          keys : token
        }    
        
        return user
      }
}

module.exports = SessionController
