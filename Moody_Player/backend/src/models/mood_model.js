const mongoose=require("mongoose")

const moodSchema=new mongoose.Schema({
    title:String,
    Artist:String,
    url:String,
    mood:String
})

const moodModel=mongoose.model("moodModel",moodSchema)

module.exports=moodModel