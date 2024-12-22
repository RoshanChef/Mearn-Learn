const express = require('express');
const app = express();

function is_old_enough(age) {
    if (age >= 14) {
        return 1;
    } else {
        return 0;
    }
}

app.get('/ride1', (req, res) => {
    if (is_old_enough(req.query.age)) {
        res.json({
            msg: "you can ride 1"
        })
    }
    else {
        res.status(411).json({
            msg: "sorry your age is not enough"
        })
    }
})
app.get('/ride2', (req, res) => {
    if (is_old_enough(req.query.age)) {
        res.json({
            msg: "you can ride 2"
        })
    }
    else {
        res.status(411).json({
            msg: "sorry your age is not enough"
        })
    }
})

app.listen(80); 

// same thing you can do using simple middleware