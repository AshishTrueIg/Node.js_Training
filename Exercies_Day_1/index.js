const fs = require("fs");
const path = require('path')
const os = require('os')

const filePath = 'Exercise_Day_1/test.txt'

// fs.writeFileSync("test.txt","hello from index.js");

fs.readFile("test.txt","utf-8",(err,data)=>{
    if(err)
        console.log(err);

    else
    console.log(data);
})

// fs.appendFileSync("test.txt",`New Entry\n`)

console.log("Directory :" , path.dirname(filePath))
console.log("File Name :" , path.basename(filePath))
console.log("Extension :",  path.extname(filePath))

const testFilePath = path.join(__dirname,'test.txt');
console.log("test File path",testFilePath)

console.log("Os type" , os.type())
console.log("platform" , os.platform())
console.log("release" , os.release())
console.log("total memory" , os.totalmem())
console.log("free memory" , os.freemem())
console.log("Cpu Cores" , os.cpus().length)