// Import the Pinecone library
const { Pinecone } = require('@pinecone-database/pinecone')

// Initialize a Pinecone client with your API key
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

// Create an index for dense vectors with integrated embedding
const sagarChatGpt=pc.index("sagar-chatgpt")

async function createMemory({vectors,metadata,messageId}) {
    
    await sagarChatGpt.upsert([{
        
        id:messageId,
        values:vectors,
        metadata
    }])
}

async function queryMemory({queryVector,limit=5,metadata}) {
    
    const data=await sagarChatGpt.query({
        vector:queryVector,
        topK:limit,
        filter:metadata?metadata:undefined,
        includeMetadata:true
    })

    return data.matches
}

module.exports={createMemory,queryMemory}
