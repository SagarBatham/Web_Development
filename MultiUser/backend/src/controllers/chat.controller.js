const chatModel = require("../model/chat.model")
const messageModel = require("../model/message.model")

async function createChat(req, res) {
    const { title } = req.body
    const user = req.user

    if (!user) {
        return res.status(401).json({
            msg: "Unauthorized User"
        })
    }

    const chat = await chatModel.create({
        user: user._id,
        title
    })

    res.status(201).json({
        msg: "Chat Created Successfully",
        chat: {
            _id: chat._id,
            title: chat.title,
            lastActivity: chat.lastActivity,
            user: chat.user,
            messages: []
        }
    })
}

async function getChats(req, res) {
    try {
        const user = req.user

        if (!user) {
            return res.status(401).json({
                msg: "Unauthorized User"
            })
        }

        const chats = await chatModel.find({ user: user._id }).sort({ lastActivity: -1 })

        // Fetch messages for each chat
        const chatsWithMessages = await Promise.all(
            chats.map(async (chat) => {
                const messages = await messageModel.find({ chat: chat._id }).sort({ createdAt: 1 })
                return {
                    _id: chat._id,
                    title: chat.title,
                    lastActivity: chat.lastActivity,
                    user: chat.user,
                    messages: messages.map(msg => ({
                        _id: msg._id,
                        content: msg.content,
                        role: msg.role,
                        createdAt: msg.createdAt
                    }))
                }
            })
        )

        res.status(200).json({
            msg: "Chats Retrieved Successfully",
            chats: chatsWithMessages
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Error retrieving chats",
            error: error.message
        })
    }
}

async function getChatMessages(req, res) {
    try {
        const { id } = req.params
        const user = req.user

        if (!user) {
            return res.status(401).json({
                msg: "Unauthorized User"
            })
        }

        const chat = await chatModel.findById(id)

        if (!chat) {
            return res.status(404).json({
                msg: "Chat not found"
            })
        }

        // Check if user owns this chat
        if (chat.user.toString() !== user._id.toString()) {
            return res.status(403).json({
                msg: "Unauthorized access"
            })
        }

        const messages = await messageModel.find({ chat: id }).sort({ createdAt: 1 })

        res.status(200).json({
            msg: "Messages Retrieved Successfully",
            messages: messages.map(msg => ({
                _id: msg._id,
                content: msg.content,
                role: msg.role,
                createdAt: msg.createdAt
            }))
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Error retrieving messages",
            error: error.message
        })
    }
}

async function deleteChat(req, res) {
    try {
        const { id } = req.params
        const user = req.user

        if (!user) {
            return res.status(401).json({
                msg: "Unauthorized User"
            })
        }

        const chat = await chatModel.findById(id)

        if (!chat) {
            return res.status(404).json({
                msg: "Chat not found"
            })
        }

        // Check if user owns this chat
        if (chat.user.toString() !== user._id.toString()) {
            return res.status(403).json({
                msg: "Unauthorized access"
            })
        }

        // Delete all messages in the chat
        await messageModel.deleteMany({ chat: id })

        // Delete the chat
        await chatModel.findByIdAndDelete(id)

        res.status(200).json({
            msg: "Chat Deleted Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Error deleting chat",
            error: error.message
        })
    }
}

async function updateChat(req, res) {
    try {
        const { id } = req.params
        const { title } = req.body
        const user = req.user

        if (!user) {
            return res.status(401).json({
                msg: "Unauthorized User"
            })
        }

        const chat = await chatModel.findById(id)

        if (!chat) {
            return res.status(404).json({
                msg: "Chat not found"
            })
        }

        // Check if user owns this chat
        if (chat.user.toString() !== user._id.toString()) {
            return res.status(403).json({
                msg: "Unauthorized access"
            })
        }

        chat.title = title || chat.title
        await chat.save()

        res.status(200).json({
            msg: "Chat Updated Successfully",
            chat: {
                _id: chat._id,
                title: chat.title,
                lastActivity: chat.lastActivity,
                user: chat.user
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Error updating chat",
            error: error.message
        })
    }
}

module.exports = { createChat, getChats, getChatMessages, deleteChat, updateChat }
