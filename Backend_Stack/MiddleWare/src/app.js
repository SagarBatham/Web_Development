const express=require("express")
const apiRouter=require("./routes/index.routes")
const app=express()
app.use((req,res,next)=>{
    console.log("This MiddleWare is Between Route and App");
    next()
})
app.use("/",apiRouter)
module.exports=app