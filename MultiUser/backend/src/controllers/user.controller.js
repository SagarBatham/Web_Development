const userModel=require("../model/user.model")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
async function userRegister(req,res) {
     const{fullname:{firstname,lastname},email,password}=req.body

     const isUserExist=await userModel.findOne({
        email
    })
    if(isUserExist){
        res.status(400).json({
            msg:"User Already Existed,Try to Login"
        })
        return
    }
    const hashPassword=await bcrypt.hash(password,10)
    const user=await userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password:hashPassword
    })
    const token=jwt.sign({user:user._id},process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(201).json({
        msg:"User Registered Succesfully",
        user,
        token
    })
    
}
async function loginController(req,res) {
     const{email,password}=req.body

     const user=await userModel.findOne({
        email
     })

     if(!user){
        return res.status(400).json({msg:"User Not Found"})
     }

     const isPassword=await bcrypt.compare(password,user.password)
     if(!isPassword){
        return res.status(400).json({msg:"Password is Wrong"})
     }

     const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
     res.cookie("token",token)
     res.status(200).json({
        user,
        msg:"User Login Successfully"
     })
     
}

module.exports={userRegister,loginController}
