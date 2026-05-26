const postModel=require("../models/post.model")
const CaptionGenerator=require("../service/ai.services")
const uploadFile=require("../service/post.service")
const {v4:uuid}=require("uuid")
async function CreatepostController(req,res) {    
    const file=req.file  
    const result=await uploadFile(file,`${uuid()}`) 
    const caption=await CaptionGenerator(file)
    const post=await postModel.create({
        image:result.url,
        caption:caption,
        user:req.user._id
    })
    res.json({
        msg:"Post Successfully Created",
        post
    })
}


module.exports={CreatepostController}