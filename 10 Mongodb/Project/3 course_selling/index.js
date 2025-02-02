const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { courseRouter } = require('./Routes/course');
const { userRouter } = require('./Routes/user');

app.use('/user', userRouter);
app.use('/course', courseRouter);


app.listen(80, () => {
    console.log('server listening on port ', 80);
})