const path=require("path");
const express=require("express");
const app=express();

app.listen(3000,()=>console.log("Funcionando en el puerto 3000"))

app.get("/",(req,res)=> res.sendFile(path.join(__dirname,"/views/index.html")))
app.get("/register",(req,res)=> res.sendFile(path.join(__dirname,"/views/register.html")))
app.get("/login",(req,res)=> res.sendFile(path.join(__dirname,"/views/login.html")))
app.get("/carrito",(req,res)=> res.sendFile(path.join(__dirname,"/views/productCart.html")))
app.get("/producto",(req,res)=> res.sendFile(path.join(__dirname,"/views/productDetail.html")))


app.use(express.static("public"))