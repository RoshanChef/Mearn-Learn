const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const JWT_SECRET = 'randomxyz';



/*
JWT essentially prevents the 1 round trip from the backend server and DB for any user request. 

library => jsonwebtoken
 
step 1 : asign jwt_secret 
step 2 : encode => jwt.sign({},key)
step 3 : decode => jwt.verify({},key)
*/

// Middleware
app.use(express.json());

// in memory database
const users = [];


app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (users.username === username)
        res.json({ message: 'user already exist' });
    else {
        users.push({ username: username, password: password });
        res.json({ message: 'secessfully done' });
    }
});

app.post('/signin', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    //find into inmemory db
    let findInx = users.findIndex(user => user.username === username && user.password === password);

    // returning the token as jwt
    if (findInx !== -1) {
        // encode
        let token = jwt.sign({ username: username }, JWT_SECRET);
        res.json({ token: token });
    }
    else {
        res.status(404).send('user not found');
    }
});

// authenticated endpoint
app.get('/me', (req, res) => {
    const token = req.headers.token; //jwt
    // decode
    let decondedInfromation = jwt.verify(token, JWT_SECRET); // {username : roshankalmthe@gmail.com}
    let username = decondedInfromation.username;

        // find the other data
    let inx = users.findIndex(user => user.username === username);

    if (inx !== -1) {
        res.json(users[inx]);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
})

app.listen(80, () => console.log('server is running ..'))