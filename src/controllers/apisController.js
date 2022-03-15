const fs = require('fs');
const path = require('path');

const db = require('../../database/models');

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
                        detail:{
                            image:`http://localhost:3000/images/user/${user.image}`
                        }
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
                    image:`http://localhost:3000/images/user/${user.image}`
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
                        id:product.id_usuario,
                        name: product.name,
                        description:product.description,
                        relations:[product.categoria,product.talle,product.edad],
                        detail:{
                            image:`http://localhost:3000/images/product/${product.image}`,
                            price:product.price
                        }
                    })
                })
                return res.status(200).json({
                    count:products.length,
                    users:data,
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
                        detail:{
                            image:`http://localhost:3000/images/product/${product.image}`,
                            price:product.price
                        }
                },
            }) 
        })
    },


}

module.exports=apisController