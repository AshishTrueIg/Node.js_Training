require("dotenv").config;
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


const users=[];

const signup = async (req,res)=>{
    const {username , password} = req.body;

    if(!username || !password)
        return res.status(400).json({message : "All fields are required"})

    if(users.find(user=>user.username === username))
        return res.status(400).json({message : "User already exist"})

    const hashedPassword = await bcrypt.hash(password,10);
    users.push({username,password:hashedPassword});
    res.json({message:"User registered successfully"})
}


const login = async (req,res)=>{
    const {username , password} = req.body;

    if(!username || !password)
        return res.status(400).json({message : "All fields are required"})

    const user = users.find(user => user.username===username);

    if(!user)
        return res.status(400).json({message:"User not found"})

    const isValid = await bcrypt.compare(password,user.password);

    if(!isValid)
        return res.status(400).json({message:"Wrong password"})

    const token = jwt.sign({username}, process.env.JWT_SECRET , {expiresIn : "1h"});
    res.cookie("token",token,{httpOnly : true});
    res.json({message:"Login Successfull" , token})
}

const logout = async (req,res)=>{
    res.clearCookie("token");
    res.json({message : "Logged out successfully"})
}

const AuthMiddleware = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if(!token)
        return res.status(400).json({message:"Access Denied"});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({message:"Invalid token"})
    }
}

module.exports = {
    signup,
    login,
    logout,
    AuthMiddleware
}