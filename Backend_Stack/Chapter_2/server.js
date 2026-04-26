//Use of Express
var express=require('express')

const app=express()

app.get("/home",(req,res)=>{
    res.send("Welcome to Home")
})

app.get("/about",(req,res)=>{
    res.send("Welcome to About")
})

app.listen(3000,()=>{
    console.log("Server Started");
})