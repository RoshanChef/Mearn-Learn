import express from 'express';
const app = express();
import cors from "cors";
import Razorpay from 'razorpay';
import crypto from 'crypto';

app.use(express.json());
app.use(cors());


const instance = new Razorpay({
    key_id: "rzp_test_H7LO8MErswTHQT",
    key_secret: "PK2lmjOR161RqkKbi8LRJ6hD"
});

app.post('/createorder', async (req, res) => {
    const options = {
        amount: 49900,
        currency: 'INR',
        receipt: 'rcpt_001'
    };

    try {
        const order = await instance.orders.create(options);
        res.status(200).json(order);
    } catch (err) {
        console.error('Error creating order:', err);
        res.status(500).json({ error: err.message });
    }
});

// Verify Order Endpoint
app.post('/verify-order', (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const hmac = crypto.createHmac('sha256', "PK2lmjOR161RqkKbi8LRJ6hD");
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const calculatedSignature = hmac.digest('hex');

    if (calculatedSignature === razorpay_signature) {
        res.status(200).json({ status: 'Payment verified successfully!' });
    } else {
        res.status(400).json({ error: 'Invalid signature' });
    }
});

app.get('/hello', (req, res) => {
    res.json({ "hello": "Namste" });
})



app.listen(80, () => {
    console.log('server is running on port 80');
})