const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const { Schema } = mongoose;

const fileSchema = new Schema({
    filename: { type: String, require: true },
    imageUrl: { type: String, default: null },
    email: { type: String },
    tags: { type: String },
    size: Number,
    date: { type: Date, default: Date.now },
    videoUrl: { type: String, default: null },
    // user: { type: Schema.Types.ObjectId, ref: 'User' },
})

const user = new Schema({
    email: { type: String, require: true },
    password: { type: String, require: true },

})

// pre-post middleware
user.pre('save', async function (next) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use 'gmail' service for simpler configuration
            auth: {
                user: "techtic.technolab.pvt@gmail.com",
                pass: "dwzwnrrmqivnenzh",
            },
        });

        const info = await transporter.sendMail({
            from: 'techtic.technolab.pvt@gmail.com',
            to: this.email, // Use 'this.email' as 'doc' is not available here
            subject: "Welcome!",
            // text: "Welcome to our platform! you are login successfully",
            html: "<b>Welcome to our platform!</b>",
        });

        console.log("Message sent: %s", info);
        console.log('pre middleware is end');
        next();
    } catch (error) {
        console.error('Error in pre-save middleware:', error);
        next(error);
    }
});


const File = mongoose.model('File', fileSchema);
const User = mongoose.model('User', user);

module.exports = File;
module.exports = { User }