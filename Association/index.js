const express = require('express')
const bodyParser = require('body-parser');
const UserController = require('./controller/userController')
const app = express();
const PORT = 8000;

app.use(bodyParser.json());

require('./models/index')

app.get('/',(req,res)=>{
    res.send("Hello from index")
})

app.get('/add',UserController.addUser)

app.get('/users',UserController.getUser)

app.get('/users/:id',UserController.getUserById)

app.post('/users',UserController.postUsers)

app.delete('/users/:id',UserController.deleteUser)

app.put('/users/:id',UserController.putUserData)

app.patch('/users/:id', UserController.patchUser)

app.get('/one-to-one',UserController.oneToOneUser);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})