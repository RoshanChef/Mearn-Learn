const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { courseRouter } = require('./Routes/course');
const { userRouter } = require('./Routes/user');
const { adminRouter } = require('./Routes/admin');

app.use(express.json());
app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/admin', adminRouter);


async function main() {

    await mongoose.connect('mongodb://localhost:27017/courseSell');

    app.listen(80, () => {
        console.log('server listening on port ', 80);
    })

}
main();