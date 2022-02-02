const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const {userOneId, userOne , setupDatabase} = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should signup new user', async()=>{
        const response = await request(app).post('/users').send({
        name : 'Andrew',
        email : 'andrew@gmail.com',
        password : 'andrewandrew'
    }).expect(201)

    // Assert that the database was changed correctly

    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    expect(response.body).toMatchObject({
        user : {
            name :'Andrew',
            email : 'andrew@gmail.com'
        },
        token : user.tokens[0].token
    })

    expect(user.password).not.toBe('andrewandrew')
})

test('Should login user', async()=>{
        const response = await request(app).get('/users/login').send({
        name : userOne.name,
        email : userOne.email,
        password : userOne.password
    }).expect(200)

    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('Should get profile for user', async()=>{
    await request(app).get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
})

test('Should upload avatar image', async()=>{
    await request(app).post('/users/me/avatar')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .attach('avatar','tests/fixtures/profile-pic.jpg')
    .expect(200)

    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update valid user', async()=>{
    await request(app).patch('/users/me')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send({
        name : 'Jassi'
    })
    .expect(200)

    const user = await User.findById(userOneId)
    expect(user.name).toEqual('Jassi')

})