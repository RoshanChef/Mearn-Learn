const jwt = require('jsonwebtoken');

const { JWT_USER_SECRET } = require('../config');


function userMiddleware(req, res, next) {
    let token = req.headers.token;
    let decode = jwt.verify(token, JWT_USER_SECRET);

    if (decode) {
        req.userId = decode;
        next();
    }
    else {
        res.status(403).json({ message: 'you are not signup' })
    }
}

module.exports = {
    userMiddleware: userMiddleware
}