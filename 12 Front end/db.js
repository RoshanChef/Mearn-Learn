const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    email: { type: String, unique: true },
    firstName: String,
    lastName: String,
    password: String,
});


let UserModel = mongoose.model('users', user);


module.exports = {
    UserModel
}