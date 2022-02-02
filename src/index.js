const app = require('./app')

/*const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const port = process.env.PORT
require('./db/mongoose')
const User = require('./models/user')  
const Task = require('./models/task')  
const userRouter = require('./routers/user') 
const taskRouter = require('./routers/task') 

 app.use((req, res, next)=>{
    if(req.method === 'GET'){
        res.send('GET requests are disabled!')
    }
    else{
        next()
    }
}) */

const port = process.env.PORT


app.listen(port,()=>{
    console.log('Server is up on port '+ port)
})

