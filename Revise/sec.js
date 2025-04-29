const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send(req.cookies);
})

app.post('/get', (req, res) => {
    const image = req.files.image;
    if (image)
        res.send("image got");
    else
        res.send("image not got");
})

const port = 800;
app.listen(port, () => {
    console.log('server is running ', port);
})