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

        if(req.file){
            let lastId=products.length;
            let newProduct=req.body;
            newProduct.id=lastId+1;
            newProduct.image=req.file.filename
    
            products.push(newProduct)
            fs.writeFileSync(productsFile,JSON.stringify(products));
            res.redirect("/");
        }
        else{
            res.render("productForm")
        }
    },
    edit:(req,res)=>{
        let id=req.params.id-1;
        res.render("productEdit",{products,id})
    },
    update:(req,res)=>{
        let id=req.params.id;
        let editedProduct=req.body;

        editedProduct.id=id;
        editedProduct.image=req.file.filename
        products.splice(id-1,1,editedProduct)
        fs.writeFileSync(productsFile,JSON.stringify(products));
		res.redirect("/");
    },
    destroy:(req,res)=>{
        
        let id=req.params.id;
        products.splice(id-1,1)
        fs.writeFileSync(productsFile,JSON.stringify(products));
		res.redirect("/");
    }
}

module.exports = productController;