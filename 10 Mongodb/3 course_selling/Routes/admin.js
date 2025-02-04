const express = require('express');
const Router = express.Router;

const adminRouter = Router();

adminRouter.post('/signup', function (req, res) {
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