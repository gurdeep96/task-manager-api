//CRUD 
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectId

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser:true}, (error, client)=>{
    if(error){
        return console.log('Unable to connect to DB')
    }
    
    const db = client.db(databaseName)
    const id = new ObjectID()

    /* db.collection('users').insertOne({
       
        name : 'Vikram',
        age : 26
    },(error,result)=>{
        if(error){
           return console.log('Unable to insert user')
        }
        console.log(result.ops)
    })  */

    /* db.collection('users').insertMany([{
        name : 'Jen',
        age : 32
    },{
        name : 'Chu',
        age : 22
    }], (error, result)=>{
        if(error){
            return console.log('Unable to insert documents!')
        }

        console.log(result.ops )
    }) */

    /* db.collection('users').findOne({name:'Jen'},(error,user)=>{
        if(error){
            return console.log('Unable to insert documents!')
        }

        console.log(user)
    })
    db.collection('users').find({age : 25}).toArray((error,users)=>{
        if(error){
            return console.log('Unable to get documents!')
    
        }
        console.log(users)
    }) */
/* 
    const updatePromise  =  db.collection('users').updateOne({
        _id : new ObjectID("61ed7de0e50679e3d8ec5ddb")
        },
        {
            $set : {
                name : 'Chotu'
            }
    })
    
    updatePromise.then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
 */

/*     db.collection('users').updateMany({
        age :25
    },{
        $set : {
            age :20,
            name :'Guru'
        }
    }).then((result)=>{
        console.log(result.modifiedCount)
    }).catch((error)=>{
        console.log(error)
    }) */

    db.collection('users').deleteMany({
        age : 32

    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})



