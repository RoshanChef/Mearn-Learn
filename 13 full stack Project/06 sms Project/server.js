const express = require('express');
const app = express();
const mongoose = require('mongoose');
const student = require('./db');

app.use(express.json());

async function main() {
    await mongoose.connect('mongodb://localhost:27017/sms');
}
main();


app.post('/add', async (req, res) => {
    try {
        const { name, roll } = req.body;
        const data = await student.create({ roll, name })
        res.json({ data });
    } catch (error) {
        res.status(404).send(error);
    }
})


const port = 80;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})