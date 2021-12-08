const path=require("path");
const express=require("express");
const app=express();
const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const methodOverride=require("method-override")

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.use(methodOverride("_method"))
app.use(express.static(path.join(__dirname,"../public")))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// RUTAS //
app.use('/', indexRouter);
app.use("/products",productsRouter)

app.use((req,res,next)=>{
    res.status(404).render("not-found")
})
app.listen(3000,()=>console.log("Funcionando en el puerto 3000"))