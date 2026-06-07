const express=require("express")

const app=express()

app.get("/",(req,res)=>{
    res.status(200).json({
        msg:"Hello World"
    })
})

app.listen(3000,()=>{
    console.log("Server Running pn port 3000");
    
})