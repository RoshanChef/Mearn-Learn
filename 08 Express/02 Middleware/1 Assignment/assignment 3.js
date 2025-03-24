const express = require('express');
const app = express();


/*
print the method , url , hostname and timestamp 
 */

function loggerMiddleware(req, res, next) {
    console.log("Method is " + req.method);
    console.log("Hostname is " + req.hostname);
    console.log("Route is " + req.url);
    console.log("host : ", req.host);
    console.log("path : ", req.path);
    console.log("protocol : ", req.protocol);
    console.log("route : ", req.route);
    console.log("Timestamp: ", new Date().toLocaleString());
    next();
}

app.use(loggerMiddleware);
app.get('/users', (req, res) => {
    res.send('sucess');
})


app.listen(80); 