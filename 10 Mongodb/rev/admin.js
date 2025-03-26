const express = require('express');
const adminRouter = express.Router();
const { UserModel, OrderModel } = require('./db');
const { z } = require('zod');
const JWT_SECRET = 'dearkrishan@31';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

adminRouter.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    let user = UserModel.find({ email });
    if (!user) {
        res.send({ err: "user already exits " });
        return;
    }

    const requiredBody = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(2).max(15)
    });

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);


    if (!parsedDataWithSuccess.success) {
        res.json({
            message: 'incorrect data format',
            err: parsedDataWithSuccess.error
        });
        return;
    }

    const hash_pass = await bcrypt.hash(password, 4);
    await UserModel.create({ name, email, password: hash_pass });
    res.send({ msg: "successfully signUp .." });
})

adminRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    let user = await UserModel.findOne({ email });

    if (!user) {
        res.send({ err: "user not found" });
        return;
    }
    else {
        let check = await bcrypt.compare(password, user.password);
        if (check) {
            let token = await jwt.sign({ id: user._id }, JWT_SECRET);
            res.json({ token });
        }
        else
            res.status(403).json({ err: "wrong password" })
    }
})

adminRouter.get('/me', async (req, res) => {
    let { token } = req.body;
    let { id } = jwt.verify(token, JWT_SECRET);

    let user = await UserModel.findById(id);
    if (!user) {
        res.status(403).send({ err: "wrong credencial" });
    } else {
        res.json({ user });
    }
})

adminRouter.post('/order', async (req, res) => {
    const { price, products } = req.body;
    console.log(req.body);
    const token = req.header('token');
    const { id } = jwt.verify(token, JWT_SECRET);

    await OrderModel.create({ price, products, userId: id });
    res.json('added suceesfull');
})


module.exports = { adminRouter }; 