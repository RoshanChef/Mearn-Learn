const express = require('express');
const Router = express.Router;
const { z } = require('zod');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { JWT_ADMIN_SECRET } = require('../config.js');


const { adminModel, courseModel } = require('../Database/db');
const { adminMiddleware } = require('../Midddleware/admin.js');

const adminRouter = Router();

adminRouter.post('/signup', async function (req, res) {
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
    let check = await adminModel.findOne({ email: email });
    if (check) {
        res.json('user already exists');
        return;
    } else {
        password = await bcrypt.hash(password, 5);
        await adminModel.create({ email, password, firstName, lastName });
        res.json({ message: 'Sign Up successfully' })
    }
})

adminRouter.post('/signin', async function (req, res) {

    let { email } = req.body;
    let admin = await adminModel.findOne({ email });
    if (admin) {
        let token = jwt.sign({ id: admin._id }, JWT_ADMIN_SECRET);
        res.header({ token });
        res.json(admin);
    }
    else {
        res.status(403).json({ message: 'invalid credentials' })
    }

})

adminRouter.post('/course', adminMiddleware, async function (req, res) {
    let adminId = req.adminId;
    const { title, description, price, imageUrl } = req.body;
    console.log(title, description, price, imageUrl);

    await courseModel.create({ title, description, price, imageUrl, creatorId: adminId });

    res.json({ message: 'course create sucessfully' })
})

adminRouter.put('/course', adminMiddleware, async function (req, res) {
    const adminId = req.adminId;
    const { title, description, price, imageUrl, courseId } = req.body;
    await courseModel.updateMany({ _id: courseId, creatorId: adminId }, { title, description, price, imageUrl });
    res.json({ message: 'course update sucessfully' })
})

adminRouter.get('/course/bluk', adminMiddleware, async function (req, res) {
    let adminId = req.adminId;
    let data = await courseModel.find({ creatorId: adminId });
    res.json({ data: data })
})

module.exports = { adminRouter: adminRouter }