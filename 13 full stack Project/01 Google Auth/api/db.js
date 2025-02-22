import mongoose from "mongoose";
const Schema = mongoose.Schema;


// schema 
const user = new Schema({
    name: String,
    email: String,
    avtar: String,
    phoneNumber: Number
})

const userModel = mongoose.model('users', user);

export default userModel;