const express = require('express');
const app = express();

const mongoose = require('mongoose');
const { adminRouter } = require('./admin');

mongoose.connect('mongodb://localhost:27017/rev').then(() => console.log('connection done')).catch(err => console.log('err ', err));

app.use(express.json());
app.use('/admin', adminRouter);

let port = 80;
app.listen(port, () => {
    console.log('server is running ', port);
})