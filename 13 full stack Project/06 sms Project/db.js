const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model('User', new Schema({
    roll: {
        type: Number,
        unique: true
    },
    name: {
        type: String
    }
}))

