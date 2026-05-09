const mongoose = require("mongoose")
const express = require("express")
const jwt=require("jsonwebtoken")
const usermodel = require("../model/user.model")
const router = express.Router()

router.post("/register", async (req, res) => {
    const{username,password}=req.body
    const existUser=await usermodel.findOne({
        username
    })
    if(existUser){
        res.status(401).json({
            msg:"Username is Already Exist"
        })
        return
    }
    const newUser = await usermodel.create({
        username,
        password
    })
    console.log(newUser)
    const token=jwt.sign({id:newUser._id},process.env.JWT_SECRET)
    res.cookie("token",token,{
        expires:new Date.now()+1000*60
    })
    res.status(201).json({
        msg: 'New User Created Successfully',
        newUser,
        token
    })
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body
    const user = await usermodel.findOne({
        username: username
    })
    console.log(user);

    if (!user) {
        console.log("Invalid UserName");
        return res.status(401).json({
            msg: "Invalid Username"
        })
    }

    const isPassValid = password == user.password
    if (!isPassValid) {
        return res.status(401).json({
            msg: "Invalid Password"
        })

    }

    return res.status(200).json({
        msg: "User Successfully Login"
    })

})

router.get("/user",async(req,res)=>{
    console.log(req.cookies);
    
    const{token}=req.cookies

    if(!token){
        return res.status(401).json({
            msg:"Unauthorized Acess",
            token
        })
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const user=await usermodel.findOne({
        _id:decoded.id
    }).select("-password -__v")
     res.json({
        msg:"User Fetched",
        user
    })
    console.log(user);
    } catch (error) {
         return res.status(401).json({
            msg:"Invalid Token"
        })
    }
       
   
})

router.get("/logout",async(res,rej)=>{
    res.clearCookie("token")

    res.status(200).json({
        msg:"User logout Successfully"
    })
})

module.exports = router
