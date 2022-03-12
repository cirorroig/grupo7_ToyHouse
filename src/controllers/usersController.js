const fs = require('fs');
const path = require('path');
const usersFile = path.join(__dirname, '../data/users.json');
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs');
const db = require('../../database/models');


const usersController = {
    index: (req,res) => {
        res.render("userindex",{users})
    },
    register:(req,res)=>{
        res.render("register")
    },
    processRegister:(req,res)=>{
        const resultValidation = validationResult(req)
        if (resultValidation.errors.length > 0){
           return res.render ("register",{
                errors:resultValidation.mapped(),
                oldData:req.body,
            })
        }
        
        db.Usuario.findOne({
            where:{
                email:req.body.email
            }
        }).then((userInDB) => {
            if(userInDB){
            return res.render ("register",{
                errors:{
                    email:{
                        msg:"Este email ya esta registrado"
                    }
                },
                oldData:req.body,
            })
        }
        })   
        db.Usuario.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            password:bcryptjs.hashSync(req.body.password),
            image:req.file.filename,
            is_admin:0
        })
        res.redirect("/users/login")
    },
    login:(req,res)=>{
        res.render("login")
    },
    processLogin:(req,res)=>{
        db.Usuario.findOne({
            where:{
                email:req.body.email
            }
        }).then((userToLogin) => {
            if(userToLogin){
            let correctPassword= bcryptjs.compareSync(req.body.password,userToLogin.password)
                if(correctPassword){
                    delete userToLogin.password;
                    req.session.userLogged=userToLogin

                    if(req.body.rememberUser){
                        res.cookie("userEmail",req.body.email, { maxAge: (1000 * 60)*120})
                    }

                    return res.redirect("/users/profile")  
                }
            
                
        }else{
           return res.render("login",{
            errors:{
                email:{
                    msg:"El email que usted ingreso no se encuentra registrado"
                }
            }
        }) 
        } 
        })      
    },
    userProfile:(req,res)=>{
        console.log(req.session.userLogged)
        res.render("userProfile",{
            user:req.session.userLogged
        })
    },
    logout:(req,res)=>{
        res.clearCookie("userEmail")
        req.session.destroy();
        return res.redirect("/")
    },
    edit:(req,res)=>{
    
        db.Usuario.findByPk(req.params.id)
        .then(usuario=>{
            res.render("userEditForm",{usuario})
        })
    },
    processEdit:(req,res)=>{
        db.Usuario.update({
           first_name:req.body.first_name,
           last_name: req.body.last_name,
           email:req.body.email,
           password:bcryptjs.hashSync(req.body.password),
           image:req.file.filename
        },{
            where:{
                id_usuario:req.params.id
            }
        })
           
        
        res.redirect("/users/logout")
    },
    users:(req,res)=>{
        db.Usuario.findAll()
            .then(users=>{
                return res.status(200).json({
                    total:users.length,
                    data:users,
                })
            }) 
    }
}

module.exports = usersController;