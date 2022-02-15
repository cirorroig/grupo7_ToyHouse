const fs = require('fs');
const { validationResult } = require('express-validator');
const path = require('path');
const db = require('../../database/models');
const Op= db.Sequelize.Op

const productsFile = path.join(__dirname, '../data/products.json');
//let products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));

let ages=db.Edad.findAll()
let categories=db.Categoria.findAll() 
let sizes=db.Talle.findAll()

const productController={
    list:(req,res)=>{
        
        db.Producto.findAll()
            .then(products=>{
               res.render("productList",{products:products}) 
            }).catch(error=>res.send(error))
        
    },
    detail:(req,res)=>{
        
        db.Producto.findByPk(req.params.id,{
            include:[{association:"categoria"},
                    {association:"talle"},
                    {association:"edad"}]
        })
        .then(product=>{res.render("productDetail",{product})})
        
        
    },
    create:(req,res)=>{        

        Promise.all([categories,sizes,ages]).then(values=>{
        res.render("productForm",{
            categories:values[0],
            sizes:values[1],
            ages:values[2]})
        }).catch(error=>res.send(error))        
    },
    store:(req,res)=>{
        const resultValidation= validationResult(req)
        if(resultValidation.errors.length > 0){
            Promise.all([categories,sizes,ages]).then(values=>{
                res.render("productForm",{
                    categories:values[0],
                    sizes:values[1],
                    ages:values[2],
                    errors:resultValidation.mapped(),
                    oldData:req.body})
                }).catch(error=>res.send(error)) 
        }
        else{
                db.Producto.create({
                name:req.body.name,
                description:req.body.description,
                detailedDescription:req.body.detailedDescription,
                price:req.body.price,
                image:req.file.filename,
                id_categoria:req.body.category,
                id_talle:req.body.size,
                id_edad:req.body.age
            })

            res.redirect("/products");

        }
    },
    edit:(req,res)=>{
        
        let pedidoProducto= db.Producto.findByPk(req.params.id)

        Promise.all([pedidoProducto,categories,sizes,ages])
        .then(values=>res.render("productEdit",{
                product:values[0], 
                categories:values[1],
                sizes:values[2],
                ages:values[3],}))

        
    },
    update:(req,res)=>{
        const resultValidation= validationResult(req)
        if(resultValidation.errors.length > 0){
            let pedidoProducto= db.Producto.findByPk(req.params.id)
            Promise.all([pedidoProducto,categories,sizes,ages])
            .then(values=>res.render("productEdit",{
                product:values[0], 
                categories:values[1],
                sizes:values[2],
                ages:values[3],
                errors:resultValidation.mapped(),
                oldData:req.body,}))
            
        }
        else{

            db.Producto.update({
                name:req.body.name,
                description:req.body.description,
                detailedDescription:req.body.detailedDescription,
                price:req.body.price,
                image:req.file.filename,
                id_categoria:req.body.category,
                id_talle:req.body.size,
                id_edad:req.body.age
            },{
                where:{
                    id_producto:req.params.id
                }
            }).catch(error=>res.send(error))

            res.redirect("/products/"+ req.params.id);  
        }
       
    },
    destroy:(req,res)=>{
        
        db.Producto.destroy({
            where:{
                id_producto:req.params.id
            }
        })
		res.redirect("/products");
    },
    search:(req,res)=>{
        db.Producto.findAll({
            where:{
                name:{[Op.like]:`%${req.body.search}%`},
            }
        }).then(products=>{
           res.render("productSearch",{products,search:req.body.search})
        })

    }
}

module.exports = productController;