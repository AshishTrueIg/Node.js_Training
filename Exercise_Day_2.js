const { error } = require('console');
const http = require('http')

const myServer = http.createServer((req,res)=>{
    if(req.method === "GET" && req.url === '/')
    {
        res.end("You are in my Server")
    }
    else if(req.method === "POST" && req.url === "/data")
    {
        let body = "";

        req.on("data",(chunk)=>{
            body+=chunk.toString()
        });

        req.on("end",()=>{
            const parsedData = JSON.parse(body);
            res.writeHead(200,{"content-type" : "application/json"});
            res.end(JSON.stringify({"message" : "Data Received" , data : parsedData }));
        });
    }

    else
    {
        res.writeHead(400, {"Content-Type":"application/json"});
        res.end(JSON.stringify({error : "Not Found"}))
    }
})


const port = 5000;

myServer.listen(port,()=>{
    console.log(`Server is running on Port :${port}`)
})