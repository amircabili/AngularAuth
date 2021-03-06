const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')

const db = "mongodb+srv://user-amir-1:mabas781@cluster0-db6ba.mongodb.net/test?retryWrites=true&w=majority" 
 
mongoose.connect(db, err=>{
    if(err){
        console.error('Error! ' + err)
    } else {
        console.error('Connected to mongodb Yes!') 
    }
})


router.get('/', (req, res) => {
    res.send('Hello from API route !!')
})


router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })
})


router.post('/login', (req, res) => {
    let userData = req.body
    //let user = new User(userData)
    User.findOne({email: userData.email}, (error,user) => {
        if (error) {
            console.log(error )
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else if(user.password !== userData.password){
                    res.status(401).send('Invalid password')
                } else {
                    res.status(200).send(user)
            }
        }
    })
})

router.get('/events', (req, res)=> {
    let events =    [
        {"id": 1,"name": "Andrew","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 2,"name": "Bill","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 3,"name": "Gorge","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 4,"name": "Sam","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 5,"name": "Andrew","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 6,"name": "Bill","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 7,"name": "Gorge","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 8,"name": "Sam","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
      ]
      res.json(events)
})


router.get('/special', (req, res)=> {
    let events =    [
        {"id": 1,"name": "Andrew1","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 2,"name": "Bill","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 3,"name": "Gorge","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 4,"name": "Sam","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 5,"name": "Andrew","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 6,"name": "Bill","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 7,"name": "Gorge","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 8,"name": "Sam","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
      ]
      res.json(events)
})


module.exports = router