const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { adminRouter } = require('./Routes/admin');
const { userRouter } = require('./Routes/user');
const { courseRouter } = require('./Routes/course');


app.use(express.json());

app.use('/admin', adminRouter);
app.use('/user', userRouter);
app.use('/course', courseRouter);

require('dotenv').config();

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
}
main();

app.listen(80, () => {
    console.log('running on the port 80 ..');
})