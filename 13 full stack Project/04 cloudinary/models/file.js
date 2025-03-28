const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const { Schema } = mongoose;

const fileSchema = new Schema({
    filename: { type: String, require: true },
    imageUrl: { type: String, default: null },
    email: { type: String },
    tags: { type: String },
    size: Number,
    videoUrl: { type: String, default: null },
    // user: { type: Schema.Types.ObjectId, ref: 'User' },
})

// pre-post middleware
fileSchema.post('save', async function (doc) {
    try {

    } catch (error) {

    }
})


const File = mongoose.model('File', fileSchema);

module.exports = File;