const mognoose=require("mongoose")

function connecttoDB(){
    mognoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("DB is Connected");
    })
    .catch((error)=>{
        console.log(error);
    })
}

module.exports=connecttoDB