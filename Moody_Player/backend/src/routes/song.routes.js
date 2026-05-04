const express = require("express");
const multer = require("multer");
const uploadFile = require("../service/storage.service");
const moodModel=require("../models/mood_model")

const router = express.Router();

// memory storage
const upload = multer({ storage: multer.memoryStorage() });

router.post("/songs", upload.single("url"), async (req, res) => {
    console.log("➡️ Request received");

    try {
        console.log("📁 File:", req.file);

        const result = await uploadFile(req.file);
        await moodModel.create({
            title:req.body.title,
            Artist:req.body.Artist,
            url:result.url,
            mood:req.body.mood
        })
        console.log("✅ Upload done");

        res.json({
            success: true,
            data: result,
            Db:"Data stored in DB"
        });

    } catch (err) {
        console.log("❌ Error:", err);

        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

router.get("/songs",async(req,res)=>{
    const {mood}=req.query
    const songs=await moodModel.find({
        mood:mood
    })

    res.status(201).json({
        songs,
        msg:"Song Fetch SuccesFully"
    })

})

module.exports = router;