const express = require('express');
const { z } = require('zod');

const app = express();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'DLALDKFALFJAL';

const ObjectId = mongoose.ObjectId;

const { UserModel, TodoModel } = require('./db');

mongoose.connect('mongodb://localhost:27017/todoDB');

app.use(express.json());

app.post('/signup', async function (req, res) {
    //Assig :  check that the password has 1 uppercase char, 1 lowercase character, 1 special character
    // validation
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30)
    });

    // /*  
    //     req.body = {
    //         email: string
    //         name : string
    //         password : string
    //     }
    // */

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);
    


    if (!parsedDataWithSuccess.success) {
        res.json({
            message: 'Incorrect format',
            error: parsedDataWithSuccess.error
        })
        return;
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    try {
        // salting the password
        let hashPassword = await bcrypt.hash(password, 5);
        console.log(hashPassword); 

        await UserModel.create({ email: email, password: hashPassword, name: name });
    } catch (e) {
        console.log('error rosan ... ', e);
        res.json({ message: 'already logged in', error: e });
        return;
    }

    res.json({ message: 'Successfully logged in' });
});

app.post('/signin', async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    let user = await UserModel.findOne({ email: email });
    if (!user) {
        res.json({ message: 'User not found' });
        return;
    }

    let matchPassword = await bcrypt.compare(password, user.password);
    console.log(matchPassword);

    if (matchPassword) {
        let token = jwt.sign({ id: user._id }, JWT_SECRET);
        res.json({
            token: token
        })
    } else {
        res.json({ message: 'Invalid Credintial' });
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

    // array of objects
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