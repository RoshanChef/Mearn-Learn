import express from 'express';
const app = express();
import cors from "cors";
import Razorpay from 'razorpay';

app.use(express.json());
app.use(cors());


const instance = new Razorpay({
    key_id: "rzp_test_H7LO8MErswTHQT",      // Store keys in .env file for security
    key_secret: "PK2lmjOR161RqkKbi8LRJ6hD"
});

app.post('/createorder', async (req, res) => {
    const options = {
        amount: 49900, // amount in smallest currency unit (499 INR -> 49900 paise)
        currency: 'INR',
        receipt: 'rcpt_001'
    };

    try {
        const order = await instance.orders.create(options);
        res.status(200).json(order); // Send back the real order ID
    } catch (err) {
        console.error('Error creating order:', err);
        res.status(500).json({ error: err.message });
    }
});

app.get('/hello', (req, res) => {
    res.json({ "hello": "Namste" });
})



app.listen(80, () => {
    console.log('server is running on port 80');
})