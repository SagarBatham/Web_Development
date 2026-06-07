const { Server } = require("socket.io");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");
const chatModel = require("../model/chat.model");
const messageModel = require("../model/message.model");
const aiService = require("../service/ai.service");
const { createMemory, queryMemory } = require("../service/vector.service");

function initalizeSocket(httpServer) {

    const io = new Server(httpServer, {
        cors: {
            origin: "http://localhost:5173",
            credentials: true
        }
    });

    io.use(async (socket, next) => {

        try {

            let token = null;
            
            // Try to get token from auth object (Socket.io auth)
            if (socket.handshake.auth && socket.handshake.auth.token) {
                token = socket.handshake.auth.token;
            }
            
            // Fallback: try to get token from cookies
            if (!token) {
                const cookies = cookie.parse(socket.handshake.headers.cookie || "");
                token = cookies.token;
            }
            
            // Fallback: try to get from Authorization header
            if (!token) {
                const authHeader = socket.handshake.headers.authorization;
                if (authHeader && authHeader.startsWith('Bearer ')) {
                    token = authHeader.substring(7);
                }
            }
            
            if (!token) { 
                console.log("No token found in auth, cookies, or headers");
                return next(new Error("Authentication Error")); 
            }
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await userModel.findById(decoded.id);
            if (!user) { return next(new Error("User Not Found")); }
            socket.user = user;
            console.log("Socket authenticated for user:", user._id);
            next();

        } catch (error) {

            console.log("Socket auth error:", error.message);
            return next(new Error("Authentication Failed: " + error.message));

        }

    });

    io.on("connection", (socket) => {

        console.log("Socket Connected:", socket.id);

        socket.on("ai-message", async ({ chat, content }) => {

            try {

                const [chatHistory, userVector] = await Promise.all([
                    messageModel.find(
                        { chat }
                    ).sort({ createdAt: 1 }), 
                    
                    aiService.generateVector(content)]);
                
                const userMessage = await messageModel.create({ 
                    chat, 
                    user: socket.user._id, 
                    content, 
                    role: "user" 
                });
                
                await createMemory({ 
                    messageId: userMessage._id.toString(), 
                    vectors: userVector, 
                    metadata: { 
                        chatId: chat, 
                        userId: socket.user._id.toString(), 
                        role: "user", 
                        text: content 
                    } });
                
                const memories = await queryMemory({
                     queryVector: userVector, 
                    limit: 3, 
                    metadata: { 
                    chatId: chat 
                    
                } });
                
                const history = chatHistory.map(item => ({
                     role: item.role, 
                    parts: [{ 
                    text: item.content 
                    
                }] }));
                
                const ltm = memories.length ? [{ 
                    role: "system", 
                    parts: [{ 
                    text: `These are previous relevant memories from the chat:\n\n
                    ${
                    memories.map(item => item.metadata.text).join("\n")
                    
                }` }] 
            }] : [];
                
                history.push({ 
                    role: "user", 
                    parts: [{ 
                    text: content 
                    
                }] 
                });
                
                const response = await aiService.generateResponse(
                    [...ltm, ...history]
                    
                );
                
                const [aiMessage, aiVector] = await Promise.all([
                    messageModel.create({
                     chat, 
                    user: socket.user._id, 
                    content: response, 
                    role: "model" 
                    
                }), 
                    aiService.generateVector(response)
                    
                ]);
                
                await createMemory({ 
                    messageId: aiMessage._id.toString(), 
                    vectors: aiVector, 
                    metadata: { 
                    chatId: chat, 
                    userId: socket.user._id.toString(), 
                    role: "model", 
                    text: response 
                    
                } });
                
                // Update chat lastActivity
                await chatModel.findByIdAndUpdate(chat, { lastActivity: new Date() });
                
                socket.emit("ai-response", {
                     chat, content: response 
                    
                });

            } catch (error) {

                console.log(error);
                socket.emit("ai-error", { message: error.message });

            }

        });

        socket.on("disconnect", () => {

            console.log("Socket Disconnected:", socket.id);

        });

    });

}

module.exports = initalizeSocket;
