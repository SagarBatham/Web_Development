const app=require("./src/app")
const connectToDb=require("./src/db/db")
const initializeSocket=require("./src/sockets/socket.server")
const httpServer=require("http").createServer(app)
connectToDb()
initializeSocket(httpServer)
httpServer.listen(3000,()=>{
    console.log("Server Running on Port 3000");
})