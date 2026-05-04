require("dotenv").config()
console.log("ENV:", process.env.MONGODB_URL);
const express=require("express")
const connectToDb=require("./db/db.js")
const moodModel=require("./models/mood_model.js")
const songRoutes=require("./routes/song.routes")
const cors=require("cors")
connectToDb()

const app=express();
app.use(cors())
app.use(express.json())
app.use("/",songRoutes)



app.listen(3000,()=>{
    console.log("Server running at Port 3000");
    
})