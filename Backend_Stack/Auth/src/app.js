require("dotenv").config()
const express=require("express")
const connectToDb=require("../db/db")
const router=require("./routes/user.routes")

connectToDb()
const app=express()
app.use(express.json())
app.use("/auth",router)
module.exports=app