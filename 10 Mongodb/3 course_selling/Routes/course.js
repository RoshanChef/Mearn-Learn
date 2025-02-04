const express = require('express');
const Router = express.Router;

// it handles incoming requests
const courseRouter = Router();


courseRouter.post('/purchase', (req, res) => {

})

courseRouter.get('/preview', (req, res) => {

});

module.exports = {
    courseRouter: courseRouter
}