const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongodb_link = 'mongodb://localhost:27017/cloud';
mongoose.connect(mongodb_link).then(() => { console.log('mongodb is connected') }).catch(err => console.log('err ', err));



const port = 80;
app.listen(port, () => {
    console.log("server is running over ", port);
})    