const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = 'afajflajf;akjdf';
const app = express();
app.use(express.json());

let users = [];
function logger(req, res, next) {
    console.log(req.method + ' method come');
    next();
}

app.use(logger);

app.post('/signup', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if (users.find(user => user.username === username)) {
        res.json({ message: 'User already exists' });
    }
    else {
        users.push({ username: username, password: password });
        res.json({ message: 'User registered successfully' });
    }
});

app.post('/signin', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let user = users.find(user => user.username === username && user.password === password);
    if (user) {
        let token = jwt.sign(username, JWT_SECRET_KEY);
        res.json({ token: token });
    }
    else {
        res.json({ message: 'user not found' });
    }
});

function auth(req, res, next) {
    let token = req.headers.token;
    let decoded = jwt.verify(token, JWT_SECRET_KEY);

    if (decoded) {
        req.username = decoded;
        next();
    } else {
        res.json({ message: 'you are not logged in' });
    }
}

app.get('/me', auth, (req, res) => {
    // const token = req.headers.token;

    // both following are same 
    // const decode = jwt.verify(token, JWT_SECRET_KEY);
    // const decode = jwt.decode(token);
    // let info = decode;

    let user = users.find(ele => ele.username === req.username);

    if (user) {
        // passing the token in response headers
        // res.header('jwt', token);
        res.json(user);
    }
    else
        res.json({ message: 'user not found' });
});


app.listen(80, () => {
    console.log('server is listening on port 80');
})