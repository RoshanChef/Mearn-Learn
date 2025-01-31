const express = require('express');
const app = express();

const mongoose = require('mongoose');

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


    if (await UserModel.findOne({ email: email })) {
        res.json({ message: 'already logged in' });
        return;
    }

    await UserModel.create({ email: email, password: password, name: name });

    res.json({ message: 'Successfully logged in' });
});

app.post('/signin', async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    let user = await UserModel.findOne({ email: email, password: password });

    if (user) {
        let token = jwt.sign({ id: user._id }, JWT_SECRET);
        res.json({
            token: token
        })
    } else {
        res.json({ message: 'User already exists' });
    }
});

function auth(req, res, next) {

    const token = req.headers.token; //jwt
    const decodedUserId = jwt.verify(token, JWT_SECRET);
    let id = decodedUserId.id;
    
    if (decodedUserId) {
        req.userId = id;
        next();
    } else {
        res.status(403).json({ message: 'user not found first signin' })
    }
}

app.post('/todo', auth, async function (req, res) {
    const title = req.body.title;
    const done = Boolean(req.body.done);

    let userId = req.userId;

    if (userId) {
        await TodoModel.create({ userId: userId, done: done, title: title });
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

app.get('/todos', auth, async function (req, res) {
    let userId = req.userId;

    let Todos = await TodoModel.find({ userId: userId });

    if (userId) {
        res.json(Todos)
    } else {
        res.json({ message: 'signin in again' });
    }

});

app.listen(80, () => {
    console.log('server listening on port 80 ...');
})