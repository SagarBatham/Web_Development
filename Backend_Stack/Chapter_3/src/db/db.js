const mongoose=require("mongoose")

function connectToDb(){
    // mongoose.connect("mongodb+srv://sagarkumar123abc23bc_db_user:hPG2BqdEFVVhGF4j@backend.qwozocm.mongodb.net/backend")
    mongoose.connect("mongodb+srv://sagar:uQI3NwUqXAytTmk4@backend.zmtvmza.mongodb.net/Back")
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        console.error("DB Connection Failed:", err.message);
    })
}

module.exports=connectToDb


// mongodb+srv://sagarkumar123abc23bc_db_user:jxlkLlAEix03M9XQbackend.qwozocm.mongodb.net/