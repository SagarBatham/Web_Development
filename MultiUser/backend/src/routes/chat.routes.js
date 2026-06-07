const express = require("express")
const authMiddleWare = require("../middleware/auth.middleware")
const chatController = require("../controllers/chat.controller")
const router = express.Router()

router.post('/', authMiddleWare.authUser, chatController.createChat)
router.get('/', authMiddleWare.authUser, chatController.getChats)
router.get('/:id/messages', authMiddleWare.authUser, chatController.getChatMessages)
router.delete('/:id', authMiddleWare.authUser, chatController.deleteChat)
router.put('/:id', authMiddleWare.authUser, chatController.updateChat)

module.exports = router
