const productController={
    list:(req,res)=>{
        res,render("products")
    },
    detail:(req,res)=>{
        res.render("productDetail")
    },
  
    create:(req,res)=>{
        res.render("productForm")
    },
}

module.exports = productController;