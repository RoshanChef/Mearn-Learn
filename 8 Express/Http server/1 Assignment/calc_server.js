const express = require('express');
const app = express();


app.get('/sum', (req, res) => {
    let num1 = req.query.a;
    let num2 = req.query.b;
    let result = parseInt(num1) + parseInt(num2);
    res.send(`${result}`);
})

app.get('/min', (req, res) => {
    let num1 = req.query.a;
    let num2 = req.query.b;
    let result = num1 - num2;
    res.send(`${result}`);
})

app.get('/mul', (req, res) => {
    let num1 = req.query.a;
    let num2 = req.query.b;
    let result = num1 * num2;
    res.send(`${result}`);
})

app.get('/div', (req, res) => {
    let num1 = req.query.a;
    let num2 = req.query.b;
    let result = num1 / num2;
    res.send(`${result}`);
})
app.get("/sum/:a/:b", (req, res) => {
    let num1 = req.params.a;
    let num2 = req.params.b;
    let result = parseInt(num1) + parseInt(num2);
    res.send(`${result}`);
})
app.listen(3001); 

