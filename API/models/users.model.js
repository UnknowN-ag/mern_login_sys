var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: {
        type: String,
        reuired: true
    },
    email: {
        type: String,
        reuired: true,
        unique: true
    },
    password: {
        type: String,
        reuired: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);