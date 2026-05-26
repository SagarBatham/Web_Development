const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse=require("./src/services/ai.service")

const httpServer = createServer(app);
const io = new Server(httpServer, { 
    cors:{
        origin:"http://localhost:5173"
    }
});

const chatHistory=[]

io.on("connection", (socket) => {
    console.log("User Connected");
    socket.on("disconnect",()=>{
        console.log("User Disconnected");
    })
    socket.on("message",async(data)=>{
        console.log("Message Recieved: ",data.prompt);
        chatHistory.push({
            role:"user",
            parts:[{text:data.prompt}]
        })
        const res=await generateResponse(chatHistory)
        console.log("Response: ",res);
        chatHistory.push({
            role:"model",
            parts:[{text:res}]
        })
        socket.emit("ResponseAi",{res})
    })
});

httpServer.listen(3000,()=>{
    console.log("Server running on Port 3000");
});