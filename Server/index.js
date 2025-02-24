const http = require("http");
const fs=require("fs")

// const myServer = http.createServer((req,res)=>{
//     console.log("New request received");
//     res.end("Hello from server");
// })

// myServer.listen(8000,()=>{
//     console.log("Server is running");
// })

fs.writeFileSync("log.txt","Hello");

const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()} : ${req.url} New request received\n`;

    fs.appendFile("log.txt",log,(err,data)=>{
        res.end("Hello from server")
    })
})

myServer.listen(8000,()=>{
    console.log("Server is running");
})