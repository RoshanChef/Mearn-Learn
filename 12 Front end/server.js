const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { UserModel } = require('./db');
const { z } = require('zod');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'fakdjfal';
const path = require('path');
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(cookieParser());

async function connection() {
    await mongoose.connect('mongodb://localhost:27017/first');
}
connection();



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/signup', async (req, res) => {
    // validation 
    const requireBody = z.object({
        email: z.string().min(3).max(100).email(),
        password: z.string().min(3).max(12),
        first_name: z.string().min(3).max(20),
        last_name: z.string().min(3).max(20)
    });

    let checkValid = requireBody.safeParse(req.body);
    if (!checkValid.success) {
        res.json('not valid format');
        return;
    }

    const { first_name, last_name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 5);

    try {
        await UserModel.create({ firstName: first_name, lastName: last_name, email, password: hashPassword });
        res.json({ 'signin': true });
    } catch (error) {
        res.status(404).json({ error: error.errmsg })
    }
})


app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const result = await UserModel.findOne({ email });

    if (!result) {
        res.json({ msg: 'User not found' });
        return;
    }

    let hashPassword = result.password;

    //bcrypt password check 
    let check = await bcrypt.compare(password, hashPassword);
    if (check) {
        let token = jwt.sign({ id: result._id }, secret);
        res.cookie('token', token);
        res.json({ token: token });
    } else {
        res.sendfile('./test.html');
        res.json({ msg: 'Invalid credencial' });
    }
})



function auth(req, res, next) {
    let { token } = req.cookies;
    req.token = token;
    next();
}


app.get('/me', auth, (req, res) => {
    let token = req.token;
    res.json({ token: token });
})

app.listen(80, () => {
    console.log('server listening on port 80');
});
