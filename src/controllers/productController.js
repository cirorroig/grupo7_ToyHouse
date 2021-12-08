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
        let id=req.params.id-1;
        res.render("productEdit",{products,id})
    },
    update:(req,res)=>{
        let editedProduct=req.body;
        let id=req.params.id-1;
        editedProduct.id=req.params.id;
        
        products.splice(id,1,editedProduct)
        console.log(products)
        fs.writeFileSync(productsFile,JSON.stringify(products));
		res.redirect("/");
    },
    destroy:(req,res)=>{

    }
}

module.exports = productController;