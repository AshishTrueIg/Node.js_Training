
const fs=require('fs')

// fs.writeFileSync("./test.txt","I write this file using synchronous fs module")

// const result=fs.readFileSync("./test.txt","utf-8")
// console.log(result)


//Asynchronous way to read file using fs module (call back function is important while using async operations)
fs.readFile("./test.txt","utf-8",(err,result)=>{  
    if(err)
    {
        console.log("Error",err);
    }
    else
    {
        console.log(result);
    }
})

console.log(fs.statSync("./test.txt"));