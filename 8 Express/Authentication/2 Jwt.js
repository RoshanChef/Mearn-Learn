const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
const JWT_SECRET = 'randomroshankalmathe';

// for the users array 
app.use(express.json())

// in memory database
const users = [];


app.post('/signUp', function (req, res) {

    let username = req.body.username;
    let password = req.body.password;

    if (users.find(ele => ele.username === username)) {
        res.json({
            mes: 'user already exists'
        })
    } else {
        users.push({ username: username, password: password });
        res.json({
            mes: 'user are signIn successfully ..'
        })
    }

});

app.post('/signIn', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i];
        }
    }

    if (foundUser) {
        // encode the username
        let token = jwt.sign({
            username: username,
        }, JWT_SECRET);
        res.json({
            token: token,
        });
    } else {
        res.status(404).json({
            message: 'Invalid username or password'
        })
    }
});

// authenticated endpoint
app.get('/me', (req, res) => {
    const token = req.headers.token; //jwt
    // decode the username
    const decodeInformation = jwt.verify(token, JWT_SECRET); // {username : roshankalmthe@gmail.com}
    const username = decodeInformation.username;

    let foundUser = null;
    // find the user
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            foundUser = users[i];
        }
    }


    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.status(404).json({ message: 'Not found' });
    }
})


app.listen(5500); 