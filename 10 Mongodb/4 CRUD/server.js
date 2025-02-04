const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const secret = 'lodenikal';
const { userModel } = require('./db');
const app = express();
const bcrypt = require('bcrypt');


app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Tesing');
app.post('/signup', async (req, res, next) => {
    const { username, password, email } = req.body;
    try {
        let hashPassword = await bcrypt.hash(password , 5);
        await userModel.create({ username: username, password: hashPassword, email: email });
        res.json({ message: 'successfully created user' })
    } catch (err) {
        res.json({ message: err.message })
    }
}
)

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {

        let user = await userModel.findOne({ email: email });
        if (!user) {
            res.json({ message: 'user not found' })
        }

        let compare = await bcrypt.compare(password, user.password);
        if (compare) {
            let token = jwt.sign({ id: user._id }, secret);
            res.setHeader('Set-Cookie', [`jwt = ${token}`]);
            res.json({ token: token });
        } else {
            res.json({ message: 'user not found' })
        }
    } catch (err) {
        res.json({ message: err.message })
    }
})

app.get('/read', async function (req, res) {
    let { token } = req.body;
    let { id } = jwt.verify(token, secret);

    try {
        let user = await userModel.findOne({ _id: id });
        if (user)
            res.json({ message: user });
        else
            res.json({ message: 'Invalid credentials' });
    } catch (e) {
        res.json(e)
    }

})

app.get('/update', async function (req, res) {
    let { token, username } = req.body;
    let { id } = jwt.verify(token, secret);
    try {
        let user = await userModel.findOne({ _id: id });
        if (user) {
            let data = await userModel.findByIdAndUpdate({ _id: id }, { username: username }, { new: true });
            res.json({ "message": data });
        }
        else {
            res.json({ message: 'Invalid credentials' });
        }
    } catch (e) {
        res.json(e)
    }

})

app.get('/delete', async function (req, res) {
    let { token } = req.body;
    let { id } = jwt.verify(token, secret);
    try {
        let user = await userModel.findOne({ _id: id });
        if (user) {
            let data = await userModel.findByIdAndDelete({ _id: id });
            res.json({ "message": data });
        }
        else {
            res.json({ message: 'Invalid credentials' });
        }
    } catch (e) {
        res.json(e)
    }
})

app.listen(80, () => {
    console.log('server is listening on port ', 80);
})