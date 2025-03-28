const nodemailer = require('nodemailer');
require('dotenv').config();
const storage = [];
function generate_otp() {
    let otp = '';
    let digits = '0123456789';
    for (let val of Array(6)) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    otp = Number.parseInt(otp);
    console.log(otp);
    return otp;
}

async function send_otp({ otp, email }) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use 'gmail' service for simpler configuration
            auth: {
                user: "techtic.technolab.pvt@gmail.com",
                pass: process.env.GMAIL_PASS,
            },
        });


        const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome and OTP</title>
            <style>
                body {
                    font-family: sans-serif;
                    line-height: 1.6;
                    margin: 0;
                    padding: 20px;
                    background-color: #f4f4f4;
                }

                .container {
                    width: 80%;
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #ffffff;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    color: #333;
                    text-align: center;
                }

                .otp-container {
                    background-color: #e0f7fa;
                    padding: 15px;
                    border-radius: 5px;
                    font-size: 1.5em;
                    font-weight: bold;
                    text-align: center;
                    margin: 20px 0;
                    color: #0097a7;
                }

                .message {
                    color: #555;
                    text-align: center;
                    margin-bottom: 20px;
                }

                .security-warning {
                    color: #d32f2f;
                    text-align: center;
                    font-weight: bold;
                    margin-top: 20px;
                }

            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to our platform!</h1>
                <div class="message">
                    Your OTP is:
                </div>
                <div class="otp-container">
                    ${otp}
                </div>
                <div class="security-warning">
                    Do not share this OTP with anyone.
                </div>
            </div>
        </body>
        </html>
    `;
        const info = await transporter.sendMail({
            from: 'techtic.technolab.pvt@gmail.com',
            to: email, // Use 'this.email' as 'doc' is not available here
            subject: "Welcome!",
            html: htmlContent,
        });
        storage[email] = { otp, email };
    } catch (error) {
        console.error('Error in pre-save middleware:', error);
    }
}

function otpSend(req, res) {
    const { email } = req.body;
    let otp = generate_otp();
    send_otp({ otp, email });
    res.json({ message: "OTP sent successfully" });
}
function otpVerify(req, res, next) {
    const { otp, email } = req.body;
    if (storage[email] && storage[email].otp === otp) {
        next();
        delete storage[email];
    }
    else {
        res.status(400).json({ message: "OTP is not valid" });
    }
}
function otpConfirm(req, res) {
    res.status(200).json({ message: "OTP is valid" });
}
module.exports = { otpConfirm, otpSend, otpVerify };