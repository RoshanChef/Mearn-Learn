const express = require('express');
const app = express();


/*
Status codes

  200 sucess code
  300 redirect code 
  400 client side error
  500 server error
ref 
https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
https://umbraco.com/knowledge-base/http-status-codes/
*/
app.get('/', (req, res) => {
    res.status(410).send("hello");
})

app.get('/file/:fa' , (req, res)=>{
    const para = req.params.fa; 
    console.log(para);
    res.send('done'); 
})

// assignment link
// https://github.com/100xdevs-cohort-2/assignments/blob/master/week-2/02-nodejs/fileServer.js

app.listen(80); 