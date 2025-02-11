const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

app.get('/data',(req,res)=>{
    const totalData = req.body;
    res.json({ message : "Data Fetched Successfully",Data : totalData})
})

app.post('/data',(req,res)=>{
    const newData = req.body;
    res.json({message : "Data added successfully",Data: newData});
})

app.put('/data/:id',(req,res)=>{
    const {id}= req.params;
    const updatedData = req.body;
    res.json({message : `Data with Id ${id} updated successfully` , updatedData})
})


//Route using Route parameters
app.delete('/data/:id',(req,res)=>{
    const {id}=req.params;
    res.json({message:`Data with Id ${id} deleted successfully`});
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})

//Route using query strings
app.get('/search',(req,res)=>{
    const {name , price}=req.query;
    if(!name)
    {
        return res.json({message:"name is missing"})
    }
    else if(!price)
    {
        return res.json({message:"price is missing"})
    }
    
    return res.json({message:`Data for ${name} and ${price}`});
})

app.use('/',(req,res)=>{
    return res.send("Hello from express server")
})