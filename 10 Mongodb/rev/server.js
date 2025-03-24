const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { UserModel } = require('./db');

mongoose.connect('mongodb://localhost:27017/rev').then(() => {
    console.log('db is connected .. ');
}).catch((err) => {
    console.log(err);
})

app.use(express.json());
app.post('/api/signup', async (req, res) => {
    const { name, email, password, age } = req.body;
    try {
        await UserModel.create({ name, email, password, age });
        res.send('signup');
    } catch (err) {
        console.log('error : ', err);
        res.json({ "error ": err.message });
    }
})

app.get('/read/:id', async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    res.send(user);
})

app.get('/read', async (req, res) => {
    const user = await UserModel.findOne({ name: "Roshan" });
    res.send(user);
})

app.post('/update', async (req, res) => {
    let data = await UserModel.where('age').lte(20).gte(16);
    console.log('Data : ', data);

    res.send('updated');
})


app.delete('/cnt', async (req, res) => {
    await UserModel.countDocuments({ age: { $eq: 23 } });
    res.send('deleted');
})

const port = 80;

app.listen(port, () => {
    console.log("server running over ", port);
})