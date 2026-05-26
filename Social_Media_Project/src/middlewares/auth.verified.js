const userModel=require("../models/user.model")
const jwt=require("jsonwebtoken")

async function authVerifier(req,res,next){
    const token=req.cookies.token
    console.log(token);
    
    if(!token){
        res.status(400).json({
            msg:"Unauthorized Access, Login Again"
        })
        return
    }

    try {
        const decode=jwt.verify(token,process.env.JWT_SECRET)

        const user=await userModel.findOne({
            _id:decode.id
        })

    
        req.user=user
        next()
    } catch (error) {
        res.status(400).json({
            msg:"Inavlid Token Login Again"
        })
        return
    }
    
}

module.exports=authVerifier