const express=require("express")
const authMiddleWare=require("../middleware/auth.middleware")
const chatController=require("../controllers/chat.controller")
const router=express.Router()
router.post('/',authMiddleWare.authUser,chatController.createChat)

module.exports=router