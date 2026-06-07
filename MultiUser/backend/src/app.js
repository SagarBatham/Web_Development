require("dotenv").config()
const express=require("express")
const cors=require("cors")

const userRouter=require("./routes/user.routes")
const chatRouter=require("./routes/chat.routes")
const cookieParser = require("cookie-parser")

const app=express()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/auth",userRouter)
app.use("/chat",chatRouter)


module.exports=app