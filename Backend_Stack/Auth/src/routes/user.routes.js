const mongoose = require("mongoose")
const express = require("express")
const usermodel = require("../model/user.model")
const router = express.Router()

router.post("/register", async (req, res) => {
    const newUser = await usermodel.create({
        username: req.body.username,
        password: req.body.password
    })
    console.log(newUser);
    res.status(201).json({
        msg: 'New User Created Successfully',
        newUser
    })
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body
    const user = await usermodel.findOne({
        username: username
    })
    console.log(user);

    if (!user) {
        console.log("Invalid UserName");
        return res.status(401).json({
            msg: "Invalid Username"
        })

    }

    const isPassValid = password == user.password
    if (!isPassValid) {
        return res.status(401).json({
            msg: "Invalid Password"
        })

    }

    return res.status(200).json({
        msg: "User Successfully Login"
    })

})

module.exports = router
