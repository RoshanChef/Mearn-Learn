const express = require('express');
const app = express();

function ageChecker(req, res, next) {
    req.name = 'roshan'; 
    if (req.query.age >= 18) { next(); }
    else { res.status(403).send('Less Age'); }
}

function heightChecker(req, res, next) {
    console.log(req.name);
    if (req.query.height >= 5) { next(); }
    else { res.status(403).send('Less height'); }
}

// here you can understand that express is a series of middleware
app.get('/', ageChecker, heightChecker, (req, res) => {
    res.send('go ahead');
})

app.listen(80); 