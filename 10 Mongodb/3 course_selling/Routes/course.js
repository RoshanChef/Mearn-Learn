const express = require('express');
const Router = express.Router;
const { userMiddleware } = require('../Midddleware/user');
const { purchaseModel, courseModel } = require('../Database/db');

// it handles incoming requests
const courseRouter = Router();

courseRouter.post('/purchase', userMiddleware, async (req, res) => {
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({ userId, courseId });

    res.json({ message: 'You have successfully Purchased ... ' })
})

courseRouter.get('/preview', async (req, res) => {
    const purchase = await courseModel.find({})
    res.json({ purchase })
});

module.exports = {
    courseRouter: courseRouter
}