const express = require('express');
const app = express();

// error handing middleware

// count number of errors 
let error_cnt = 0;


app.get('/user', (req, res) => {
    throw new Error('Page not Found error');
    res.send('success');
})


// error handling middle 
app.use((err, req, res, next) => {
    res.status(404).send({});
    error_cnt++;
})

app.listen(80); 