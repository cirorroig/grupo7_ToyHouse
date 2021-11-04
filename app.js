const path=require("path");
const express=require("express");
const app=express();

app.listen(3000,()=>console.log("Funcionando en el puerto 3000"))

app.get("/",(req,res)=> res.sendFile(path.join(__dirname,"/views/home.html")))
app.get("/register",(req,res)=> res.sendFile(path.join(__dirname,"/views/register.html")))
app.get("/login",(req,res)=> res.sendFile(path.join(__dirname,"/views/login.html")))
app.get("/carrito",(req,res)=> res.sendFile(path.join(__dirname,"/views/carrito.html")))
app.get("/producto",(req,res)=> res.sendFile(path.join(__dirname,"/views/producto.html")))


app.use(express.static("public"))