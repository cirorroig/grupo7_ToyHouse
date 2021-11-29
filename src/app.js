


const path=require("path");
const express=require("express");
const app=express();
const indexRouter = require('./routes/index');


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use('/', indexRouter);

/*app.get("/",(req,res)=> res.sendFile(path.join(__dirname,"/src/views/index.ejs")))
app.get("/register",(req,res)=> res.sendFile(path.join(__dirname,"/src/views/register.ejs")))
app.get("/login",(req,res)=> res.sendFile(path.join(__dirname,"/src/views/login.ejs")))
app.get("/carrito",(req,res)=> res.sendFile(path.join(__dirname,"/src/views/productCart.ejs")))
app.get("/producto",(req,res)=> res.sendFile(path.join(__dirname,"/src/views/productDetail.ejs")))*/


app.use(express.static(path.join(__dirname, "public")))

app.listen(3000,()=>console.log("Funcionando en el puerto 3000"))