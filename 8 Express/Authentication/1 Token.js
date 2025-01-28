const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// for the users array (InMemory storage)
const users = [];

function generateToken(length = 16) {
 
    let token = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters[randomIndex];
    }
    return token;
}


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
        let token = generateToken();
        foundUser.token = token;
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
    const token = req.headers.token;
    let foundUser = null;
    // find the user
    for (let i = 0; i < users.length; i++) {
        if (users[i].token === token) {
            foundUser = users[i];
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password,
            token: foundUser.token
        })
    } else {
        res.status(404).json({ message: 'Not found' });
    }
})


app.listen(5500); 