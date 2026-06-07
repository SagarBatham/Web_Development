import dotenv from "dotenv";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config()
console.log(process.env.GEMINI_API_KEY);
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})




const transport = new StdioClientTransport({
    command: "node",
    args: ["./mcp.server.js"]
});

const client = new Client({
    name: "example-client",
    version: "1.0.0"
});

await client.connect(transport);
const tools = []
client.listTools().then(async response => {
    response.tools.forEach(tool => {
        tools.push({
            name: tool.name,
            description: tool.description,
            parameters: {
                type: "OBJECT",
                properties: tool.inputSchema.properties,
                required: tool.inputSchema.required || []
            }
        })
    });
    const airesponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: 'Add 2 and 3',
        config: {
            tools: [{
                functionDeclarations: tools
            }],
        },
    });
    console.log("Ai Respone",airesponse.functionCalls);
    

    airesponse.functionCalls.forEach(async call=>{
        const toolresponse=await client.callTool({
            name:call.name,
            arguments:call.args
        })

        console.log("Tool respone",toolresponse);
        
    })
    

})


