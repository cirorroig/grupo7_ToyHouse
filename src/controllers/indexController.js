const fs = require('fs');
const path = require('path');

const db = require('../../database/models');

const indexController = {
    index: (req,res) => {
        db.Producto.findAll()
            .then(products=>{
                res.render("index",{products}) 
            })
        
    },
    login:(req,res)=>{
        res.render("login")
    },
    register:(req,res)=>{
        res.render("register")
    },
    cart:(req,res)=>{
        res.render("productCart")
    },
}

module.exports = indexController;