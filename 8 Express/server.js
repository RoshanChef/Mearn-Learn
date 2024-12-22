// create http server

const express = require('express');
const app = express();

function calculating(n) {
    let val = 0;
    for (let i = 1; i <= n; i++) {
        val += i;
    }
    return val;
}
app.get('/', (req, res) => {
    let n = req.query.n; 
    let ans = calculating(req.query.n);
    res.send('value is '+ ans);
})



// create routes 
// app.get('/', (request, response) => {
//     // response.send('<h2>Get Request</h2>');
//     response.send({
//         name: 'Roshan'
//     });
// })
// app.post('/', (request, response) => {
//     response.send('<h2>Post Request</h2>');
// })
// app.delete('/', (request, response) => {
//     response.send('<h2>Delete Request</h2>');
// })
// app.put('/', (request, response) => {
//     response.send('<h2>Put Request</h2>');
// })



app.listen(3000);
