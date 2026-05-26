require("dotenv").config()
const express=require("express")

const userRouter=require("./routes/user.routes")
const chatRouter=require("./routes/chat.routes")
const cookieParser = require("cookie-parser")

const app=express()
app.use(express.json())
app.use(cookieParser())
app.use("/auth",userRouter)
app.use("/auth/chat",chatRouter)


module.exports=app