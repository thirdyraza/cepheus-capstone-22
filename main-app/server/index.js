const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/users.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// middlewares
app.use(cors())
app.use(express.json())

// mongodb connection
mongoose.connect('mongodb://127.0.0.1:27017/mern-stack-yt')

// REGISTER function using db
app.post('/api/register', async (req, res) => {

    try{
        const matchID = await User.findOne({ // finding for ID matches
            idnum: req.body.idnum
        })
        
        if (!matchID){ // no matches found
            var idn = req.body.idnum
        } else {
            res.json({status: 'error', error: 'ID Number already taken'})
        }

        if(!isNaN(idn)){ // ID is only integers
            var purenum = idn
        } else {
            res.json({status: 'error', error: 'ID Number must only be numbers'})
        }

        if (purenum.length >= 5  && purenum.length < 8){ // ID 5 to 7 digits only
            var chkID = true
            var firstN = req.body.fname
            var midIn = req.body.midi
            var LastN = req.body.lname
        } else {
            res.json({status: 'error', error: 'ID Number must be at least 5 digits / should not exceed 7'})
        }

        if (chkID && isNaN(firstN)){
            if(isNaN(midIn)){
                if(isNaN(LastN)){
                    const encryptPass = await bcrypt.hash(req.body.pass, 10)
                    await User.create({
                        fname: req.body.fname,
                        lname: req.body.lname,
                        midi: req.body.midi,
                        role: req.body.role,
                        idnum: req.body.idnum,
                        pass: encryptPass,
                        dept: req.body.dept,
                        org: req.body.org,                
                    })
                    res.json({ status: 'success' })
                } else {
                    res.json({status: 'error', error: 'Last Name cannot contain numbers'})
                }
            } else {
                res.json({status: 'error', error: 'Middle Initial cannot contain numbers'})
            }
        } else {
            res.json({status: 'error', error: 'First Name cannot contain numbers'})
        }

    }catch (err){
        res.json({status: 'error', error: 'Form not complete'})
    } 
})

// LOG IN function using db
app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        idnum: req.body.idnum,
    })

    if(user) {
        const isPassValid = await bcrypt.compare(req.body.pass, user.pass)

        if(isPassValid){
            const token = jwt.sign({
                idnum: user.idnum,
                pass: user.pass,
            }, '21975232')
            res.json({ status: 'success', user : token})
        } else {
            res.json({ status: 'error', user : false, error: 'Password incorrect!'})
        }
    } else{
        res.json({status: 'error', error: 'User not found!'})
        return
    }
    
})

// getting info for HOME using db
app.get('/api/home', async (req, res) => {

    const token = req.headers['x-access-token']
    try{
        const decoded = jwt.verify(token, '21975232')
        const idnum = decoded.idnum
        const user = await User.findOne({ idnum:idnum })

        return res.json({
            status: 'success',
            idnum: user.idnum,
            fname: user.fname,
            role:user.role,
            midi: user.midi,
            lname: user.lname,
            org: user.org,
            dept: user.dept
            })
    }catch(err){
        res.json({ status: 'error', error: 'invalid token'})
    }
})

// establishing PORT + testing
app.listen(2301, () => {
    console.log('server is running');
})