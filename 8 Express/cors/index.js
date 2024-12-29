const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


// //serve on the same port 
// app.get("/" , (req, res)=>{
//     res.sendFile(__dirname+'/index.html'); 
// })

//cross origin resource sharing  

app.post('/sum', (req, res) => {
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    res.json({
        result: a + b
    });
})

app.get('/hello', (req, res) => {
    res.send("hello roshan");
})

app.listen(3000); 