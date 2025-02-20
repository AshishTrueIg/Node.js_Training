const express = require('express');
const app = express();
const PORT = 8000;
require('./models/index')
const bodyParser = require('body-parser')
const taskController = require('./controller/taskController')

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hello from Express Server")
})

app.get('/tasks',taskController.getAllTasks)

app.get('/tasks/:id',taskController.getTaskById);

app.post('/tasks',taskController.addTasks);

app.put('/tasks/:id',taskController.editTaskById);

app.patch('/tasks/:id',taskController.editSingleEntryOfTaskById);

app.delete('/tasks/:id' ,taskController.deleteUserById);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})