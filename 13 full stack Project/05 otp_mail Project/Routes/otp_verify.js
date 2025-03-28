const express = require('express');
const OTP_router = express.Router();
const { otpVerify, otpSend, otpConfirm } = require('../controller/otp_veri');

OTP_router.post('/otp', otpSend);
OTP_router.post('/otp/verify', otpVerify, otpConfirm);

module.exports = OTP_router;