const { Server } = require("socket.io");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");

const userModel = require("../model/user.model");
const messageModel = require("../model/message.model");

const aiService = require("../service/ai.service");

const {
    createMemory,
    queryMemory
} = require("../service/vector.service");

function initalizeSocket(httpServer) {

    const io = new Server(httpServer, {});

    io.use(async (socket, next) => {

        try {

            const cookies = cookie.parse(
                socket.handshake.headers.cookie || ""
            );

            if (!cookies.token) {
                return next(
                    new Error(
                        "Authentication Error: No Token"
                    )
                );
            }

            const decoded = jwt.verify(
                cookies.token,
                process.env.JWT_SECRET
            );

            const user = await userModel.findById(
                decoded.id
            );

            if (!user) {
                return next(
                    new Error(
                        "User Not Found"
                    )
                );
            }

            socket.user = user;

            next();

        } catch (error) {

            return next(
                new Error(
                    "Authentication Failed"
                )
            );
        }
    });

    io.on("connection", (socket) => {

        console.log(
            "Socket Connected:",
            socket.id
        );

        socket.on(
            "ai-message",
            async (messagePayload) => {

                try {

                    const {
                        chat,
                        content
                    } = messagePayload;

                    // Fetch Chat History
                    const chatHistory =
                        await messageModel.find({
                            chat
                        }).sort({
                            createdAt: 1
                        });

                    // Save User Message
                    const userMessage =
                        await messageModel.create({

                            chat,

                            user:
                                socket.user._id,

                            content,

                            role: "user"
                        });

                    // Generate User Vector
                    const userVector =
                        await aiService.generateVector(
                            content
                        );

                    console.log(
                        "User Vector Length:",
                        userVector.length
                    );

                    // Store User Memory
                    await createMemory({

                        messageId:
                            userMessage._id.toString(),

                        vectors:
                            userVector,

                        metadata: {

                            chatId:
                                chat,

                            userId:
                                socket.user
                                    ._id.toString(),

                            role: "user",

                            text:
                                content
                        }
                    });

                    // Query Relevant Memories
                    const memories =
                        await queryMemory({

                            queryVector:
                                userVector,

                            limit: 3,

                            metadata: {
                                chatId: chat
                            }
                        });

                    console.log(
                        "MEMORIES:",
                        memories
                    );

                    // Convert History
                    const history =
                        chatHistory.map(item => ({
                            role: item.role,
                            parts: [
                                {
                                    text:
                                        item.content
                                }
                            ]
                        }));

                    // Inject Relevant Memories
                    const memoryText =
                        memories
                            .map(item =>
                                item.metadata.text
                            )
                            .join("\n");

                    if (memoryText) {

                        history.unshift({

                            role: "user",

                            parts: [
                                {
                                    text:
`Relevant Previous Memories:

${memoryText}`
                                }
                            ]
                        });
                    }

                    // Add Current Message
                    history.push({

                        role: "user",

                        parts: [
                            {
                                text: content
                            }
                        ]
                    });

                    // Generate AI Response
                    const response =
                        await aiService.generateResponse(
                            history
                        );

                    // Save AI Response
                    const aiMessage =
                        await messageModel.create({

                            chat,

                            user:
                                socket.user._id,

                            content:
                                response,

                            role: "model"
                        });

                    // Generate AI Vector
                    const aiVector =
                        await aiService.generateVector(
                            response
                        );

                    console.log(
                        "AI Vector Length:",
                        aiVector.length
                    );

                    // Store AI Memory
                    await createMemory({

                        messageId:
                            aiMessage._id.toString(),

                        vectors:
                            aiVector,

                        metadata: {

                            chatId:
                                chat,

                            userId:
                                socket.user
                                    ._id.toString(),

                            role: "model",

                            text:
                                response
                        }
                    });

                    // Send Response
                    socket.emit(
                        "ai-response",
                        {
                            content: response,
                            chat
                        }
                    );

                } catch (error) {

                    console.log(error);

                    socket.emit(
                        "ai-error",
                        {
                            message:
                                error.message
                        }
                    );
                }
            }
        );

        socket.on(
            "disconnect",
            () => {

                console.log(
                    "Socket Disconnected:",
                    socket.id
                );
            }
        );
    });
}

module.exports = initalizeSocket;