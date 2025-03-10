const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());

// it's middleware without this it will show error 
app.use(cors());// Enables CORS for cross-origin requests


/*   
By Default CORS are not allowed
    It's about background request

    If you want to allow specific domains with specific method then 
        
        app.use(cors({
            origin: ["http://localhost:3000", 'http://localhost:59068'],
            methods: ["GET"],
        }));
        
*/
// Serve the HTML file
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '/index.html');
    res.sendFile(filePath);
});

// POST route for addition
app.post('/', (req, res) => {
    const obj = req.body;
    const ans = parseInt(obj.a) + parseInt(obj.b);
    console.log('Object is:', obj);
    res.json({ ans: ans });
});

// POST route for /call
app.post('/call', (req, res) => {
    const obj = req.body;
    console.log('Received object:', obj);
    res.json(obj); // Send the same object back as response
});

// Start the server
app.listen(80, () => {
    console.log("Server is running on port 80");
});
