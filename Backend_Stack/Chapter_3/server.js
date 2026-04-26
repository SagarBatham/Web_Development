const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
var express=require("express")
var connectToDB=require("./src/db/db")

connectToDB()
const app=express()

var notes=[];

app.use(express.json())

app.post("/notes",(req,res)=>{
    const note=req.body
    notes.push(note)
    res.send("Notes Added Successfully")
    console.log("Notes Added SuccesFully");
})

app.get("/notes",(req,res)=>{
    res.json(notes)
    console.log(notes);
})

app.patch("/notes/:idx",(req,res)=>{
    const idx=parseInt(req.params.idx)
    const newnote=req.body
    notes[idx]=newnote
    res.send("Notes Update Successfully")
    console.log("Notes Updated SuccesFully");
})

app.delete("/notes/:idx",(req,res)=>{
    const idx=req.params.idx
    const data=notes.splice(idx,1)
    console.log("Notes Deleted",data);
    
})

app.listen(3000,()=>{
    console.log("Server is Running on port 3000");
})