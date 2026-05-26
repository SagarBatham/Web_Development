
require("dotenv").config()

console.log(process.env.GEMINI_API_KEY)
const { GoogleGenAI } = require("@google/genai")

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
});

async function CaptionGenerator(file) {
    const filedata=file.buffer.toString("base64")
    const contents = [
  {
    inlineData: {
      mimeType: "image/jpeg",
      data: filedata,
    },
  },
  { text: "Caption this image." },
];

const response = await ai.models.generateContent({
  model: "gemini-3-flash-preview",
  contents: contents,
  config:{
    systemInstruction:"Generate only single or double line caption with hashtag and emoji"
  }
});
return response.text
}


module.exports=CaptionGenerator