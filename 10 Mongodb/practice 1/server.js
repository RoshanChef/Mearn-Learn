const express = require('express');
const mongoose = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'DLALDKFALFJAL';
const ObjectId = mongoose.ObjectId;

const { UserModel, TodoModel } = require('./db');

mongoose.connect('mongodb://localhost:27017/todoDB');

app.use(express.json());

app.post('/signup', async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({ email: email, password: password, name: name });

    res.json({ message: 'Successfully logged in' });
});

app.post('/signin', async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    let user = await UserModel.findOne({ email: email, password: password });

    if (user) {
        let token = jwt.sign({ id: user.id }, JWT_SECRET);
        res.json({
            token: token
        })
    } else {
        res.json({ message: 'User already exists' });
    }
});

app.post('/todo', async function (req, res) {
    const title = req.body.title;
    const done = Boolean(req.body.done);

    const token = req.headers.token; //jwt
    const decodedUserId = jwt.verify(token, JWT_SECRET);
    let id = decodedUserId.id;

    //find the user is exist or not
    let founder = await UserModel.findOne({ _id: id });
    if (founder) {
        await TodoModel.create({ userId: founder._id, done: done, title: title });
        res.json({
            message: "todo created successfully"
        })
    }
    else {
        res.json({
            message: "UserId not found"
        })
    }

});
app.get('/todos', async function (req, res) {

    let token = req.headers.token;
    let decode = jwt.verify(token, JWT_SECRET);
    let id = decode.id;
    console.log('id is ', id);

    let founder = await TodoModel.findOne({ userId: id });
    console.log(founder);
    founder = await TodoModel.findOne({ userId: id });
    console.log(founder);

    if (founder) {
        res.json({
            message: founder
        })
    } else {
        res.json({ message: 'signin in again' });
    }

});

app.listen(80, () => {
    console.log('server listening on port 80 ...');
})