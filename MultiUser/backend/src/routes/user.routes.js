const express = require("express");

const router = express.Router();

const { userRegister ,loginController} = require("../controllers/user.controller");

router.post("/register", userRegister);
router.post("/login", loginController);

module.exports = router;