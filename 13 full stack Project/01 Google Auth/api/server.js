import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userModel from './db.js';
const app = express();

app.use(cors());

app.use(express.json());
mongoose.connect("mongodb://localhost:27017/signGoogle");

app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
    next();
});


app.post('/signin/google', async (req, res) => {
    const { name, email, avtar, phoneNumber } = req.body;

    await userModel.create({ email, phoneNumber, avtar, name });
    res.status(200).json({ message: 'User signed in successfully' });
})


app.listen(80, () => {
    console.log('server is running on ... ', 80);
})