const userModel=require("../models/user.model")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
async function registerController(req,res){
    const{username,password}=req.body

    const isUserExist=await userModel.findOne({
        username
    })

    if(isUserExist){
        res.status(409).json({
            msg:"Username Already Exists"
        })
        return
    }

    const user=await userModel.create({
        username,
        password:await bcrypt.hash(password,10)
    })
    const token=jwt.sign({id:user.id},process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(201).json({
        msg:"User Registered Successfully",
        user,
        token
    })
}

async function loginController(req,res) {
    const{username,password}=req.body

    const user=await userModel.findOne({
        username
    })
    if(!user){
        res.status(401).json({
            msg:"Username is Wrong"
        })
        return
    }
    
    const isPassword=await bcrypt.compare(password,user.password)
    if(!isPassword){
        res.status(401).json({
            msg:"Invalid Password"
        })
        return
    }
    const token=jwt.sign({id:user.id},process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(200).json({
        user,
        msg:"User Successfully Logined",
        token
    })
}

module.exports={registerController,loginController}