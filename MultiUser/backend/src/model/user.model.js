const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
        },
        lastname:{
            type:String,
        }
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    }
},{
    timestamps:true
}
)

const userModel=mongoose.model("userModel",userSchema)

module.exports=userModel