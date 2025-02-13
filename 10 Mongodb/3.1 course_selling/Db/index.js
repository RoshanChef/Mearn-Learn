const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
    username: String,
    password: String
})

const userSchema = new Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: Schema.Types.ObjectId,
        ref: 'courses'
    }]
})

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    image_link: String,
});

const admin = mongoose.model('admin', adminSchema);
const user = mongoose.model('users', userSchema);
const course = mongoose.model('courses', courseSchema);

module.exports = {
    admin, user, course
}