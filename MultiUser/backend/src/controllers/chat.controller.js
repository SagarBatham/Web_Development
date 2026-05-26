const chatModel = require("../model/chat.model")

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
            user:chat.user
        }
    })
}

module.exports = { createChat }