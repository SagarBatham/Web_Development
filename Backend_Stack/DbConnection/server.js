var express=require("express")
var connectToDb=require("./src/db/db")
var notemodel=require("./src/models/notes.model")
connectToDb()
const app=express();
app.use(express.json())

app.post("/notes",(req,res)=>{
    const {title,desc}=req.body

    notemodel.create({
        title,desc
    })

    res.json({
        message:"Note Created Succesfully"
    })
})

app.delete("/notes/:id",async(req,res)=>{
    const id=req.params.id

    await notemodel.findOneAndDelete({_id:id})

    res.json({
        message:"Notes Deleted Successfully"
    })
})

app.get("/notes",async(req,res)=>{
    const users=await notemodel.find()
    res.json({
        user:users,
        message:"All Message are Here"
    })
})

app.patch("/notes/:id",async(req,res)=>{
    const id=req.params.id
    await notemodel.findOneAndUpdate({_id:id},req.body)
    res.json({
        message:"Notes Updated Succesfully"
    })
})

app.listen(3000,()=>{
    console.log("Server running on Port 3000");
})