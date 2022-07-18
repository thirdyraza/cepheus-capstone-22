const mongoose = require('mongoose')

const User = new mongoose.Schema ({
    fname: {type: String, required: true},
    midi: {type: String, required: true},
    lname: {type: String, required: true},
    role: {type: String, required: true},
    idnum: {type: String, required: true, unique: true},
    pass: {type: String, required: true},
    dept: {type: String, required: true},
    org: {type: String, required: true},
},
{ collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model