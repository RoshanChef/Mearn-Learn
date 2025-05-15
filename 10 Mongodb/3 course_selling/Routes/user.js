const express = require('express');
const Router = express.Router;
const { z } = require('zod');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_USER_SECRET } = require('../config');

const { userModel, purchaseModel, courseModel } = require('../Database/db');
const { userMiddleware } = require('../Midddleware/user');

// it handles incoming requests
const userRouter = Router();

userRouter.post('/signup', async (req, res) => {
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        password: z.string().min(3).max(30),
        firstName: z.string().min(3).max(100),
        lastName: z.string().min(3).max(100),
    });
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if (!parsedDataWithSuccess.success) {
        console.log(req.body);
        res.json({
            message: 'Incorrect format',
            error: parsedDataWithSuccess.error
        })
        return;
    }

    let { email, password, firstName, lastName } = req.body;
    let check = await userModel.findOne({ email });
    if (check) {
        res.json('user already exists');
        return;
    } else {
        password = await bcrypt.hash(password, 5);
        await userModel.create({ email, password, firstName, lastName });
        res.json({ message: 'Sign Up successfully' })
    }
})

userRouter.post('/signin', async (req, res) => {
    const { email } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
        let token = jwt.sign({ id: user._id }, JWT_USER_SECRET);
        res.header({ token });
        res.json(user);
    }
    else {
        res.status(403).json({ message: 'invalid credentials' })
    }
})

userRouter.get('/purchases', userMiddleware, async (req, res) => {
    const userId = req.userId;
    const purchases = await purchaseModel.find({ userId });
    const courseData = await courseModel.find({ _id: { $in: purchases.map(x => x.courseId) } });
    console.log(courseData);
    res.json({ purchases, courseData });
})

module.exports = {
    userRouter
}