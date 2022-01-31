const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const port = process.env.PORT
require('./db/mongoose')
const User = require('./models/user')  
const Task = require('./models/task')  
const userRouter = require('./routers/user') 
const taskRouter = require('./routers/task') 

/* app.use((req, res, next)=>{
    if(req.method === 'GET'){
        res.send('GET requests are disabled!')
    }
    else{
        next()
    }
}) */

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log('Server is up on port '+ port)
})


 const main = async()=>{
    const user = await User.findById('61f585f1e8dc073abd79e18f')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

//main() 