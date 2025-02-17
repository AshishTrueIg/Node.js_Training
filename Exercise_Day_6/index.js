import express from 'express'
import bodyParser from 'body-parser';
const app = express();
const PORT = 8000;
import User from './models/user.js';
import UserController from './controllers/userController.js'

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    return res.send("Hello fron index")
})

app.get('/add',UserController.addUser)

app.get('/users',UserController.getUser)

app.get('/users/:id',UserController.getUserById)

app.post('/users',UserController.postUsers)

app.delete('/users/:id',UserController.deleteUser)

app.put('/users/:id',UserController.putUserData)

app.patch('/users/:id', UserController.patchUser)

User.sync({ force: false })
// User.sync({ alter: true })

app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})