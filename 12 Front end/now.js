const express = require('express');
const app = express();
const path = require('path');
const port = 3500;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', indexe.html));
})


app.listen(port, () => {
    console.log('server listening on port', port);
});