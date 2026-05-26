require("dotenv").config()
const express=require("express")

const app=express()

app.get("/",(req,res)=>{
    res.send("Heloo World");
})


module.exports=app