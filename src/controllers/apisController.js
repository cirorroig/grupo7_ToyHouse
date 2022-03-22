const fs = require('fs');
const path = require('path');
const db = require('../../database/models');
const Op= db.Sequelize.Op
const apisController={

    userList:(req,res)=>{
     let data=[]
        db.Usuario.findAll()
            .then(users=>{
                users.forEach(user => {
                    data.push({
                        id:user.id_usuario,
                        name: user.first_name+" "+user.last_name,
                        email:user.email,
                        detail:`http://localhost:4000/api/users/${user.id_usuario}`,
                        image:`http://localhost:4000/images/user/${user.image}`,                           
                    })
                })
                return res.status(200).json({
                    count:users.length,
                    users:data,
                })
            }) 
    },
    user:(req,res)=>{
        let id=req.params.id
        db.Usuario.findByPk(id)
        .then(user=>{
            return res.status(200).json({
                data:{
                    first_name:user.first_name,
                    last_name:user.last_name,
                    email:user.email,
                    image:`http://localhost:4000/images/user/${user.image}`
                },
            }) 
        })
    },
    productList:(req,res)=>{
        let data=[]
        db.Producto.findAll({ include:[{association:"categoria"},
        {association:"talle"},
        {association:"edad"}]})
            .then(products=>{
                products.forEach(product => {
                    data.push({
                        id:product.id_producto,
                        name: product.name,
                        description:product.description,
                        detailedDescription:product.detailedDescription,
                        relations:[product.categoria,product.talle,product.edad],
                        detail:`http://localhost:4000/api/products/${product.id_producto}`,
                        image:`http://localhost:4000/images/product/${product.image}`,
                        price:product.price
                        
                    })
                })
                return res.status(200).json({
                    count:products.length,
                    products:data,
                })
            }) 
    },
    product:(req,res)=>{
        let id=req.params.id
        db.Producto.findByPk(id,{ include:[{association:"categoria"},
        {association:"talle"},
        {association:"edad"}]})
        .then(product=>{
            return res.status(200).json({
                data:{
                    name: product.name,
                        description:product.description,
                        relations:[product.categoria,product.talle,product.edad],
                        image:`http://localhost:4000/images/product/${product.image}`,
                        price:product.price
                        
                },
            }) 
        })
    },
    lastProduct: (req, res) => {
        db.Producto.findAll({order:[["id_producto", "DESC"]], limit:1})
        .then(product=> {

            res.status(200).json({
                data:{
                name: product[0].name,
                description:product[0].description,
                detailedDescription:product[0].detailedDescription,
                image:`http://localhost:4000/images/product/${product[0].image}`,
                price:product[0].price  
                },
            })
        })
        .catch(function(error){
            res.json({status:500})
        })
    },
    productSearch:(req,res)=>{
        if(req.params.keyword!=""){
           db.Producto.findAll({
            where:{
                name:{[Op.like]:`%${req.params.keyword}%`},
            }
        }).then(products=>{
            console.log(products);
            res.json({
                count:products.length,
                data:products.map(product=>{
                    return({
                        id:product.id_producto,
                        name: product.name,
                        description:product.description,
                        detailedDescription:product.detailedDescription,
                        detail:`http://localhost:4000/api/products/${product.id_producto}`,
                        image:`http://localhost:4000/images/product/${product.image}`,
                        price:product.price
                    })
                })

            })
        }) 
        }else{
            res.json({})
        }
    },
    emptySearch:(req,res)=>{
        res.json({})
    },
    categoryList:(req,res)=>{
        let data=[]
           db.Categoria.findAll()
               .then(categories=>{
                categories.forEach(category => {
                       data.push({
                           id:category.id_categoria,
                           name: category.name,                          
                       })
                   })
                   return res.status(200).json({
                       count:categories.length,
                       categories:data,
                   })
               }) 
    },
    ageList:(req,res)=>{
        let data=[]
           db.Edad.findAll()
               .then(ages=>{
                ages.forEach(age => {
                       data.push({
                           id:age.id_edad,
                           name: age.range,                          
                       })
                   })
                   return res.status(200).json({
                       count:ages.length,
                       ages:data,
                   })
               }) 
    },
    sizeList:(req,res)=>{
        let data=[]
           db.Talle.findAll()
               .then(sizes=>{
                sizes.forEach(size => {
                       data.push({
                           id:size.id_talle,
                           name: size.talle,                          
                       })
                   })
                   return res.status(200).json({
                       count:sizes.length,
                       sizes:data,
                   })
               }) 
    },

}

module.exports=apisController
