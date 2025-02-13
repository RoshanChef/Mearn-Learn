const { admin } = require('../Db');

async function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    let user = await admin.findOne({ username: username, password: password });
    if (user)
        next();
    else {
        res.json('user not found')
    }
}
module.exports = { adminMiddleware }