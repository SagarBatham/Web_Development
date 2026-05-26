const userModel=require("../model/user.model")
const jwt=require("jsonwebtoken")

async function authUser(req,res,next){
    const{token}=req.cookies
    if(!token){
        return res.status(401).json({msg:"Unauthorized"})
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded);
        
        const user=await userModel.findById(decoded.id)
        
        req.user=user

        next()
    } catch (error) {
        return res.status(401).json({msg:"Unauthorized Login"})
    }
}

module.exports={authUser}