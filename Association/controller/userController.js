var db = require('../models/index.js')
const User = db.user;
const Contact = db.contact;

var addUser = async (req,res)=>{
    const jane = User.build({ firstName: 'Jane' , lastName: 'Peralta' });
    console.log(jane instanceof User); // true
    console.log("First Name",jane.firstName); // "Jane"
    console.log("Last Name",jane.lastName); // "Jane"
    await jane.save();
    console.log('Jane was saved to the database!');
    console.log(jane.toJSON());
    res.status(200).json(jane.toJSON())
}

const getUser = async (req,res)=>{
    const data = await User.findAll({});
    res.status(200).json({data:data});
}

const getUserById = async (req,res)=>{
    const data = await User.findOne({
        where:{
            id:req.params.id
        }
    });
    res.status(200).json({data:data});
}

const postUsers = async(req,res)=>{
    var postData = req.body;
    const data = await User.create(postData);
    res.status(200).json({data:data});
}

const deleteUser = async (req,res)=>{
    const data = await User.destroy({
        where:{
            id:req.params.id
        }
    })

    res.status(200).json({data:data})
}


const putUserData = async (req,res)=>{
    const updatedData = req.body;
    const data = await User.update(updatedData,{
        where:{
            id:req.params.id
        }
    })

    return res.status(200).json({data:data})
}

const patchUser = async (req,res)=>{
    var updatedData = req.body;
    const data = await User.update(updatedData,{
        where :{
            id:req.params.id
        }
    })
    res.status(200).json({data:data})
}

const oneToOneUser = async (req,res)=>{
    // var data = await User.create({firstName:"Rahul" , lastName:"Kumar"});
    // if(data && data.id)
    // {
    //     await Contact.create({permanent_address:"xyz",current_address:"abc",user_id:data.id})
    // }
    var data = await User.findAll({
        include:Contact
    })
    res.status(200).json({data:data})
}

module.exports = {addUser , getUser , getUserById , postUsers , deleteUser , patchUser , putUserData , oneToOneUser};