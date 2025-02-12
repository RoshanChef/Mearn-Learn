const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { UserModel } = require('./db');
const { z } = require('zod');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(express.json());

async function connection() {
    await mongoose.connect('mongodb://localhost:27017/first');
}
connection();

app.post('/signup', async (req, res) => {
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

app.listen(80, () => {
    console.log('server listening on port 80');
}); 