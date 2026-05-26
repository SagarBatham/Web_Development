const express=require("express")

const router=express.Router()
const authVerifier=require("../middlewares/auth.verified")
const multer=require("multer")
const {CreatepostController}=require("../controller/post.Controller")
const upload=multer({storage:multer.memoryStorage()})
router.post("/",
    authVerifier,
    upload.single("image"),
    CreatepostController
)

module.exports=router
