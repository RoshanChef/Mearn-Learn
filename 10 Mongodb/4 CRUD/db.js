const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

//schema 
const user = new schema({
    username: String,
    password: String,
    email: { type: String, unique: true }
})

const userModel = mongoose.model('users', user);

module.exports = {
    userModel: userModel
}