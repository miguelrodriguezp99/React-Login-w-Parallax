const mongoose = require('mongoose')

const User = mongoose.model('UserL', {
    email: {type: String, required: true},
    password: {type: String, required: true},
    salt: {type: String, required: true},
})

module.exports = User