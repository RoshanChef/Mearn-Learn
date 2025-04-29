const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const db = require('./config/database');
const cloudinary = require('./config/cloudinary');

cloudinary.cloudinaryConnect();
const app = express();

// MongoDB Connection
async function connect() {
    const mongodb_link = 'mongodb://localhost:27017/cloud';
    await mongoose.connect(mongodb_link)
        .then(() => console.log('MongoDB is connected'))
        .catch(err => console.log('MongoDB connection error:', err));
}

connect();

// Middleware
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

const router = require('./routes/FileUpload');
app.use('/api/v1/upload', router);

const port = 800;
app.listen(port, () => {
    console.log("Server is running on port", port);
});
