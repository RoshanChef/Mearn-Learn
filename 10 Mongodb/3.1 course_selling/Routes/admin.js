const express = require('express');
const { adminMiddleware } = require('../Middleware/admin');
const { admin, course } = require('../Db');
const { Router } = express;

const adminRouter = Router();


adminRouter.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    let result = await admin.create({ username, password });

    if (result) {
        res.json({ msg: 'Admin successfully signed up', result })
    }
})

adminRouter.post('/courses', adminMiddleware, async (req, res) => {
    const { title, description, price, image_link } = req.body;
    let check = await course.create({ title, description, price, image_link });

    if (check) {
        res.json({ msg: 'Course successfully  Added', courseId: check._id })
    } else {
        res.json('Course not present');
    }
})

adminRouter.get('/courses', adminMiddleware, async (req, res) => {
    const Allcourses = await course.find({});
    res.json(Allcourses);
})

module.exports = { adminRouter }