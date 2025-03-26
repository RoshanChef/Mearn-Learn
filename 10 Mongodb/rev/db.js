const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, required: true }
});

const Order = new mongoose.Schema({
    price: Number,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
    products: Number
});
 
const UserModel = mongoose.model('users', User);
const OrderModel = mongoose.model('orders', Order);

module.exports = {
    UserModel, OrderModel
}