const express = require('express');
const app = express();


// let bodyParser = require('body-parser');
// app.use(bodyParser.json());

app.use(express.json());

app.post('/sum', (req, res) => {
    let a = req.body.a;
    let b = req.body.b;
    res.json({
        result: a + b
    });
})


app.listen(80); 