require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const PORT = process.env.PORT;
const authController = require("./controller/AuthController")

app.use(express.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    return res.send("Hello from server");
})

app.post('/signup',authController.signup);

app.post('/login',authController.login);

app.post('/logout',authController.logout);

app.get('/profile',authController.AuthMiddleware , (req,res)=>{
    res.json({message: `Welcome, ${req.user.username}` , user: req.user});
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})
