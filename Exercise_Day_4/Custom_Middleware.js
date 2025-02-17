const express = require('express');
const app = express();
const PORT = 8000;

const logger = (req,res,next)=>{
    console.log("URL",req.url);
    console.log("Request Method",req.method);
    console.log("Time",new Date().toISOString());
    next();
}

app.use(logger)

app.use('/',(req,res)=>{
    return res.send("Hello from Custom Middleware")
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})