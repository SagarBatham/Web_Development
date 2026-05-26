require("dotenv").config();

const { GoogleGenAI } =
    require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function generateResponse(content) {

    try {

        if (!content) {
            throw new Error(
                "Content is required"
            );
        }

        const response =
            await ai.models.generateContent({
                model: "gemini-3.5-flash",
                contents: content
            });

        return response.text;

    } catch (error) {

        console.log(
            "Gemini Error:",
            error.message
        );

        throw error;
    }
}

async function generateVector(content) {
    const response=await ai.models.embedContent({
        model:"gemini-embedding-001",
        contents:content,
        config:{
            outputDimensionality:768
        }
    })
    console.log(response);
    
    return response.embeddings[0].values
}

module.exports = {generateResponse,generateVector}