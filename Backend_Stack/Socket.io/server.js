const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse=require("./src/services/ai.service")

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
    console.log("User Connected");
    socket.on("disconnect",()=>{
        console.log("User Disconnected");
    })
    socket.on("message",async(data)=>{
        console.log("Message Recieved: ",data.prompt);
        const res=await generateResponse(data.prompt)
        console.log("Response: ",res);
        socket.emit("ResponseAi",{res})
    })
});

httpServer.listen(3000,()=>{
    console.log("Server running on Port 3000");
});