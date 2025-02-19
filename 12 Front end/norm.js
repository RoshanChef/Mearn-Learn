import express from 'express';
const app = express();
import cors from 'cors';

app.use(cors());
app.use(express.json());

let api = [
    {
        id: 1,
        name: 'Roshan',
        email: 'kalmathe',
        age: 22
    }
]

app.get('/', (req, res) => {
    res.json(api);
})

app.get('/me', (req, res) => {
    res.send(`<h1>hello world</h1>`)
})


app.listen(80, () => {
    console.log('server is running over port ', 80);
})