var mongoose=require("mongoose")

function connectToDb() {
    mongoose.connect("mongodb://sagar:nL2g47aknVh1x0yi@ac-w4l0kzu-shard-00-00.zmtvmza.mongodb.net:27017,ac-w4l0kzu-shard-00-01.zmtvmza.mongodb.net:27017,ac-w4l0kzu-shard-00-02.zmtvmza.mongodb.net:27017/learnBackend?ssl=true&replicaSet=atlas-gwifr0-shard-0&authSource=admin&appName=Backend")
    .then(()=>{
    console.log("Db is Connected");  
})
}

module.exports=connectToDb
