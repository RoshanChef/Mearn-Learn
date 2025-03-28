const express = require('express');
const app = express();
const OTP_router = require('./Routes/otp_verify');

const port = 80;
app.use(express.json());

app.use('/', OTP_router);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})