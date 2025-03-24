const mongoose = require('mongoose');


const User = new mongoose.Schema({
    name: String,
    email: { type: String },
    password: { type: String, required: true },
    age: Number
});



const UserModel = mongoose.model('users', User);

module.exports = {
    UserModel
}