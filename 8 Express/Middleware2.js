const express = require('express');
const app = express();

function is_old_enough_middleware(req, res, next) {
    let age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.status(411).json({
            msg: "sorry your age is not enough"
        })
    }
}

app.use(is_old_enough_middleware); //only consider the below endpoints 

app.get('/ride1', (req, res) => {
    res.json({
        msg: "you can ride 1"
    })
})
app.get('/ride2', (req, res) => {
    res.json({
        msg: "you can ride 2"
    })
})


app.listen(80); 
