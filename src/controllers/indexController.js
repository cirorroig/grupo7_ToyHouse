const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));

const indexController = {
    index: (req,res) => {
        res.render("index",{products})
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
//prueba
//akjdhgasjhidhgasjhdghasd
module.exports = indexController;