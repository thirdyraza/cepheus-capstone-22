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
            return res.json({status: 'sameID'})
        }

        if(!isNaN(idn)){ // ID is only integers
            var purenum = idn
        } else {
            return res.json({status: 'unPure'})
        }

        if (purenum.length >= 5){ // ID 5 to 7 digits only
            if(purenum.length < 8){
                var chkID = true
                var firstN = req.body.fname
                var midIn = req.body.midi
                var LastN = req.body.lname
            } else {
                return res.json({status: 'less8'})
            }
        } else {
            return res.json({status: 'more5'})
        }

        // checking for numbers in the names (first, last, middle)
        var letters = /^[A-Za-z]+$/
        if (chkID && firstN.match(letters)){
            if(midIn.match(letters)){
                if(LastN.match(letters)){
                    const encryptPass = await bcrypt.hash(req.body.pass, 10)
                    await User.create({
                        fname: req.body.fname,
                        lname: req.body.lname,
                        midi: req.body.midi,
                        role: req.body.role,
                        idnum: req.body.idnum,
                        pass: encryptPass,
                        cpass: req.body.cpass,
                        dept: req.body.dept,
                        org: req.body.org,                
                    })
                    return res.json({ status: 'success' })
                } else {
                    return res.json({status: 'errLname'})
                }
            } else {
                return res.json({status: 'errMidi'})
            }
        } else {
            return res.json({status: 'errFname'})
        }

    }catch (err){
        return res.json({status: 'error', error: 'FORM NOT COMPLETE'})
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
            res.json({ status: 'invalPass'})
        }
    } else{
        res.json({status: 'unknownID'})
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

console.log(mongoose.connection.readyState);

// establishing PORT + testing
app.listen(2301, () => {
    console.log('server is running');
})