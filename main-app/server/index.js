const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/users.model')
const jwt = require('jsonwebtoken')

// middlewares
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/mern-stack-yt')

// register function using db
app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try{
        await User.create({
            fname: req.body.fname,
            lname: req.body.lname,
            idnum: req.body.idnum,
            pass: req.body.pass,
        })
        res.json({ status: 'success' })
    }catch (err){
        res.json({status: 'error', error: 'ID Number is already taken'})
    } 
})

// log in function using db
app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        idnum: req.body.idnum,
        pass: req.body.pass,
    })

    if(user){
        const token = jwt.sign({
            idnum: user.idnum,
            pass: user.pass,
        }, '21975232')
        return res.json({ status: 'success', user : token})
    } else {
        return res.json({ status: 'fail', user : false})
    }
})

// getting info for home using db
app.get('/api/home', async (req, res) => {

    const token = req.headers['x-access-token']
    try{
        const decoded = jwt.verify(token, '21975232')
        const idnum = decoded.idnum
        const user = await User.findOne({ idnum:idnum })

        return res.json({ status: 'success', dept: user.dept})
    }catch(err){
        console.log(error)
        res.json({ status: 'error', error: 'invalid token'})
    }
})

app.post('/api/home', async (req, res) => {

    const token = req.headers['x-access-token']
    try{
        const decoded = jwt.verify(token, '21975232')
        const idnum = decoded.idnum
        await User.updateOne({ idnum:idnum },
            {$set: { dept: req.body.dept}})
        return { status: 'success'}
    }catch(err){
        console.log(error)
        res.json({ status: 'error', error: 'invalid token'})
    }
})

app.listen(2301, () => {
    console.log('server is running on 2301');
})