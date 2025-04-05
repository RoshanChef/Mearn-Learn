const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./database');

app.use(express.json());
async function connect() {
    await mongoose.connect('mongodb://localhost:27017/test');
}
connect().then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));

app.post("/create", async (req, res) => {
    const { name, password } = req.body;
    const user = await User.create({ name, password });
    res.json({
        success: true,
        data: user
    })
});

app.post("/update", async (req, res) => {
    const { id } = req.body;
    // delete req.body.id;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json({
        success: true,
        data: user
    })
})
const port = 80;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})