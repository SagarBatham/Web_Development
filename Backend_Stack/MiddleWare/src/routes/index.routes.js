const express=require("express")
const router=express()

router.get("/",(req,res)=>{
    res.json({
        msg:"Req Sent SuccesFully"
    })
})

module.exports=router