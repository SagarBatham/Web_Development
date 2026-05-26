const express=require("express")
const userModel=require("../models/user.model")
const jwt=require("jsonwebtoken")
const {registerController,loginController}=require("../controller/auth.Controller")

const router=express.Router()

router.post("/register",registerController)

router.get("/login",loginController)
module.exports=router