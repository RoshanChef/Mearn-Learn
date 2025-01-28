const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// there is no need of cors if FE and BE on same server
app.post('/keep', (req, res) => {
    console.log(req.body);
    let str = 'file ' + req.body.first + ' ' + req.body.second;
    res.send('File ' + req.body.first)
})


app.get('/', (req, res) => {
    let filePath = path.join(__dirname, '/index.html');
    res.sendFile(filePath);
})

app.listen(80); 