const db = require('../models/index.js')
const Task = db.Task;

const getAllTasks = async (req,res)=>{
    const data = await Task.findAll({});
    res.send({data:data});
}

const getTaskById = async (req,res)=>{
    const task = await Task.findOne({
        where:{
            id:req.params.id
        }
    });
    res.status(200).json({data : task});
}

const addTasks = async (req,res)=>{
    
    try {
        const {title , description , completed} = req.body;

        if(!title || !description )
        {
            return res.status(400).json({error:"All fields are required"})
        }
        const newTask = await Task.create({
            title,
            description,
            completed
        })
        return res.status(201).json({message:"Task Created Successfully" , task:newTask})
        
    } catch (error) {
        console.error("Error adding task:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

const editTaskById = async (req,res)=>{
    const updatedData = req.body;
    const data = await Task.update(updatedData,{
        where:{
            id:req.params.id
        }
    })

    return res.status(200).json({data:data})
}

const deleteUserById = async (req,res)=>{
    const data = await Task.destroy({
        where:{
            id:req.params.id
        }
    })

    return res.status(200).status({data:data})
}

const editSingleEntryOfTaskById = async (req,res)=>{
    const updatedData = req.body;
    const data = await Task.update(updatedData,{
        where:{
            id:req.params.id
        }
    })

    return res.status(200).json({data:data});
}

module.exports = {
    getAllTasks,
    getTaskById,
    addTasks,
    editTaskById,
    deleteUserById,
    editSingleEntryOfTaskById
}