var http=require('http');

const server=http.createServer((req,res)=>{{
    res.end("Fk You")
}})

server.listen(3000,()=>{
    console.log("Server running on Port 3000");
})