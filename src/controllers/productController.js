const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));


const productController={
    list:(req,res)=>{
        res.render("productList",{products})
    },
    detail:(req,res)=>{
        let id=req.params.id-1;
        res.render("productDetail",{products,id})
    },
    create:(req,res)=>{
        res.render("productForm")
    },
    store:(req,res)=>{
        let lastId=products.length;
        let newProduct=req.body;
        newProduct.id=lastId+1;

        products.push(newProduct)
        fs.writeFileSync(productsFile,JSON.stringify(products));
		res.redirect("/");
    },
    edit:(req,res)=>{

    },
    update:(req,res)=>{

    },
    destroy:(req,res)=>{
      let id= req.body.id-1
      products.splide(id,1);
    }
}

module.exports = productController;