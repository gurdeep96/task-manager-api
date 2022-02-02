const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Task = require('../../src/models/task')
const User = require('../../src/models/user')

const userOneId = new mongoose.Types.ObjectId()

const userOne = {
    name : 'Mike',
    email : 'mike@gmail.com',
    password : 'mikemike',
    tokens : [{
        token : jwt.sign({_id : userOneId}, process.env.JWT_SECRET)
    }]
} 

const userTwoId = new mongoose.Types.ObjectId()

const userTwo = {
    name : 'Chotu',
    email : 'chotu@gmail.com',
    password : 'chotuchotu',
    tokens : [{
        token : jwt.sign({_id : userTwoId}, process.env.JWT_SECRET)
    }]
} 

const taskOne = {
    _id : new mongoose.Types.ObjectId(),
    description : 'First Task',
    completed : false,
    owner : userOneId
}

const taskTwo = {
    _id : new mongoose.Types.ObjectId(),
    description : 'Second Task',
    completed : true,
    owner : userOne._id
}

const taskThree = {
    _id : new mongoose.Types.ObjectId(),
    description : 'Third Task',
    completed : true,
    owner : userTwo._id
}

const setupDatabase = async()=>{
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    userOneId,
    userOne,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}