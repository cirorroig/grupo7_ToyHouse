const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));


const productController={
    list:(req,res)=>{
        res.render("productList",{products})
    },
    detail:(req,res)=>{
        res.render("productDetail")
    },
  
    create:(req,res)=>{
        res.render("productForm")
    },
}

module.exports = productController;