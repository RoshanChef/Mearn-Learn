const jwt = require('jsonwebtoken');
const { JWT_ADMIN_SECRET } = require('../config.js');


function adminMiddleware(req, res, next) {
    let token = req.headers.token;
    let decode = jwt.verify(token, JWT_ADMIN_SECRET);

    if (decode) {
        req.adminId = decode.id;
        next();
    }
    else {
        res.status(403).json({ message: 'you are not signup' })
    }
}

module.exports = {
    adminMiddleware: adminMiddleware
}