const express = require('express');
const Router = express.Router;

// it handles incoming requests
const userRouter = Router();

express().use(express.json());

userRouter.post('/signup', (req, res) => {
    // const email = req.body.email;
    // const password = req.body.password;
    res.json({ message: "signup" });
})

userRouter.post('/signin', (req, res) => {
    res.json({ message: "signin" });
})

userRouter.get('/purchases', (req, res) => {
    res.json({ message: "purchases" });
})

module.exports = {
    userRouter: userRouter
}