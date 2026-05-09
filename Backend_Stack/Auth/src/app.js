require("dotenv").config()
const jwt=require("jsonwebtoken")
const cookieParser=require("cookie-parser")
const express=require("express")
const connectToDb=require("../db/db")
const router=require("./routes/user.routes")

connectToDb()
const app=express()
app.use(express.json())
app.use(cookieParser())
app.use("/auth",router)
module.exports=app