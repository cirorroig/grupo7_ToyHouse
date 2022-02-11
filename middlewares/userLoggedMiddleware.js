
const db = require('../database/models');
function userLoggedMiddleware(req,res,next) {
    res.locals.isLogged=false

    let emailInCookie= req.cookies.userEmail
    let userFromCookie= db.Usuario.findOne({
        where:{
            email:emailInCookie
        }
    })

    if(userFromCookie){
        req.session.userLogged = userFromCookie
    }
    
    if(req.session && req.session.userLogged){
        res.locals.isLogged=true
        res.locals.userLogged= req.session.userLogged

    }
    next()
}

module.exports = userLoggedMiddleware