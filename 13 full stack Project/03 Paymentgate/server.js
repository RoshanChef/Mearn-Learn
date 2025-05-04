import express from 'express';
const app = express();
import cors from 'cors';
import Razorpay from 'razorpay';
import crypto from 'crypto';

app.use(express.json());
app.use(cors());

const instance = new Razorpay({
    key_id: "rzp_test_tdj3haTldKOnCw",
    key_secret: "cKeFoaXrPH4mcxRzmSRWOMfy"
});

app.post('/createorder', async (req, res) => {
    const options = {
        amount: 49900,
        currency: 'INR',
        receipt: 'rcpt_001',
        notes: {
            key1: 'value3',
            key2: 'value2'
        }
    };

    try {
        // create state
        const order = await instance.orders.create(options);
        res.status(200).json({ order, options });
    } catch (err) {
        console.error('Error creating order:', err);
        res.status(500).json({ error: err.message });
    }
});

// Verify Order Endpoint
app.post('/verify-order', (req, res) => {
    console.log('body i got ', req.body);
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const hmac = crypto.createHmac('sha256', "cKeFoaXrPH4mcxRzmSRWOMfy");
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const calculatedSignature = hmac.digest('hex');

    // authorized state
    if (calculatedSignature === razorpay_signature) {
        res.status(200).json({ status: 'Payment verified successfully!' });
    } else {
        res.status(400).json({ error: 'Invalid signature' });
    }
});

app.get('/hello', (req, res) => {
    res.json({ "hello": "Namste" });
})

app.listen(5000, () => {
    console.log('server is running on port 800');
})

