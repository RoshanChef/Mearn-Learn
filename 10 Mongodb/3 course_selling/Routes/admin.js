const express = require('express');
const Router = express.Router;
const { z } = require('zod');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { adminModel } = require('../Database/db');


const adminRouter = Router();

function auth(req, res, next) {

}

adminRouter.post('/signup', function (req, res) {
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30)
    });
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);



    if (!parsedDataWithSuccess.success) {
        res.json({
            message: 'Incorrect format',
            error: parsedDataWithSuccess.error
        })
        return;
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    res.json({ message: 'Sign Up Endpoint' })
})

adminRouter.post('/signin', function (req, res) {
    res.json({ message: 'signIn Enpoint' })
})

adminRouter.post('/course', function (req, res) {
    res.json({ message: 'course create Enpoint' })
})

adminRouter.put('/course', function (req, res) {
    res.json({ message: 'course update Enpoint' })
})

adminRouter.get('/course/bluk', function (req, res) {
    res.json({ message: 'course see Enpoint' })
})

module.exports = { adminRouter: adminRouter }