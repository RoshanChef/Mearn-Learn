const { user } = require('../Db');

async function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    let result = await user.findOne({ username: username, password: password });
    if (result)
        next();
    else {
        res.json('user not found')
    }
}

module.exports = { userMiddleware }