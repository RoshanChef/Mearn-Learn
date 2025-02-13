const express = require('express');
const { userMiddleware } = require('../Middleware/user');
const { user, course } = require('../Db');
const { Router } = express;

const userRouter = new Router();

userRouter.post('/signup', async (req, res) => {
    const { username, password } = req.headers;

    const result = await user.create({ username, password });
    res.json(result);
});

userRouter.get('/courses', async (req, res) => {
    const result = await course.find({});
    res.json(result);
})

userRouter.post('/courses/:courseId', userMiddleware, async (req, res) => {
    let { courseId } = req.params;

    const { username, password } = req.headers;

    let result = await user.updateOne({ username, password }, { "$push": { purchasedCourses: courseId } })

    if (result) {
        res.json('result inserted successfully');
    } else {
        res.json('result inserted not successfully');
    }
})

userRouter.get('/purchases', userMiddleware, async (req, res) => {
    const { username } = req.headers;
    const result = await user.findOne({ username });

    console.log(result.purchasedCourses);

    const courses = await course.find({ _id: { "$in": result.purchasedCourses } })

    res.json({ courses })
})
module.exports = { userRouter }; 