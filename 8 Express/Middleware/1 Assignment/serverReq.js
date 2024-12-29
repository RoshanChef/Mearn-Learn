const express = require('express');
const app = express();

let Req_count = 0;
/*
    It count the number of requests
*/


app.use((req, res, next) => {
    Req_count++;
    console.log(Req_count);
    next();
})

app.get('/user', (req, res) => {
    res.send('user success');
})
app.get('/login', (req, res) => {
    res.send('loging success');
})
app.get('/logout', (req, res) => {
    res.send("logout success");
})


app.listen(80); 