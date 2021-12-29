const fs = require('fs');
const path = require('path');
const User = require("../../models/Users");
const usersFile = path.join(__dirname, '../data/users.json');
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs');

let users = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));

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
        
        let userInDB= User.findByField("email",req.body.email)

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
    
        let newUser={
            ...req.body,
            password: bcryptjs.hashSync(req.body.password),
            image:req.file.filename
        }

        User.register(newUser)

        res.render("login")
    },
    login:(req,res)=>{
        res.render("login")
    },
}

module.exports = usersController;