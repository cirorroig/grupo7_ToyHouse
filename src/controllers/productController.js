const fs = require('fs');
const { validationResult } = require('express-validator');
const path = require('path');

const productsFile = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));

let ages=["Menores de 3 años","Mayores 3 años","Mayores 5 años","Mayores 8 años","Mayores de 13 años"]
let categories=["Disfraces","Juegos de mesa","Vehículos","Peluches y muñecos","Bebés","Instrumentos musicales","Juegos de agua y playa","Puzzles","Juegos de primera infancia","Armas de juguete"] 
let sizes=["XS","S","M","L"] 

const productController={
    ages:["Menores de 3 años","Mayores 3 años","Mayores 5 años","Mayores 8 años","Mayores de 13 años"],
    categories:["Disfraces","Juegos de mesa","Vehículos","Peluches y muñecos","Bebés","Instrumentos musicales","Juegos de agua y playa","Puzzles","Juegos de primera infancia","Armas de juguete"] ,
    sizes:["XS","S","M","L"] ,
    list:(req,res)=>{
        res.render("productList",{products})
    },
    detail:(req,res)=>{
        let id=req.params.id-1;
        
        res.render("productDetail",{products,id})
    },
    create:(req,res)=>{
//
        res.render("productForm",{categories,sizes,ages})
    },
    store:(req,res)=>{
        const resultValidation= validationResult(req)
        if(resultValidation.errors.length > 0){
            return res.render("productForm",{
                errors:resultValidation.mapped(),
                oldData:req.body,
                categories,sizes,ages
            })
        }
        else{
                let lastId=products.length;
                let newProduct=req.body;
                newProduct.id=lastId+1;
                newProduct.image=req.file.filename
                products.push(newProduct)
                fs.writeFileSync(productsFile,JSON.stringify(products));
                res.redirect("/");
        }
    },
    edit:(req,res)=>{
        let id=req.params.id-1;
        res.render("productEdit",{products,id,categories,sizes,ages})
    },
    update:(req,res)=>{
        const resultValidation= validationResult(req)
        let id=req.params.id-1;
        if(resultValidation.errors.length > 0){
            return res.render("productEdit",{
                products,id,
                errors:resultValidation.mapped(),
                oldData:req.body,
                categories,sizes,ages
            })
        }
        else{
            let id=req.params.id;
            let editedProduct=req.body;
            editedProduct.id=id;
            editedProduct.image=req.file.filename
            products.splice(id-1,1,editedProduct)
            fs.writeFileSync(productsFile,JSON.stringify(products));
            res.redirect("/");  
        }
       
    },
    destroy:(req,res)=>{
        
        let id=req.params.id;
        products.splice(id-1,1)
        fs.writeFileSync(productsFile,JSON.stringify(products));
		res.redirect("/");
    }
}

module.exports = productController;