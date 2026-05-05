const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    username:String,
    password:String
})

const userModel=mongoose.model("userSchema",userSchema)

module.exports=userModel