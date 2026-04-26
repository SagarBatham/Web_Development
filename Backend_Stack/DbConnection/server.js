var express=require("express")
var connectToDb=require("./src/db/db")
connectToDb()
const app=express();

app.listen(3000,()=>{
    console.log("Server running on Port 3000");
})