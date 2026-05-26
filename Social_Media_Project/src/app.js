require("dotenv").config()
const connectToDB=require("./db/db")
const jwt=require("jsonwebtoken")
const Authroutes=require("./routes/user.routes")
const Postroutes=require("./routes/post.routes")
const cookieParser=require("cookie-parser")
const express=require("express")
connectToDB()
const app=express()
app.use(express.json())
app.use(cookieParser());
app.use("/auth/user",Authroutes)
app.use("/auth/post",Postroutes)
module.exports=app