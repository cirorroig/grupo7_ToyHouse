
const db = require('../database/models');
function userLoggedMiddleware(req,res,next) {
    res.locals.isLogged=false

    if(req.cookies.userEmail){
      db.Usuario.findOne({
        where:{
            email:req.cookies.userEmail
        }
    }).then((userFromCookie) => {
          if(userFromCookie){
        req.session.userLogged = userFromCookie
    }   
    }
    
    )
  
    }
    
  
    if(req.session && req.session.userLogged){
        res.locals.isLogged=true
        res.locals.userLogged= req.session.userLogged

    }
    next()
}

module.exports = userLoggedMiddleware