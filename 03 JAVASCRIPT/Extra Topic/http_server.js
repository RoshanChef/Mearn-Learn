const http = require('http');
const port = 80;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    let body = '';
    req.on('data', (chunk) => {
        body = chunk.toString();
    });
    
    req.on('end', () => {
        body = JSON.parse(body);
        const { name, age } = body;
        console.log('Name : ', name, '\nage : ', age);

        if (req.url === '/' && req.method === 'GET') {
            res.end(JSON.stringify({ method: "GET" }));
        }
        else if (req.url === '/' && req.method === 'POST') {
            res.end(JSON.stringify({ method: "POST" }));
        }
        else if (req.url === '/' && req.method === 'PUT') {
            res.end(JSON.stringify({ method: "PUT" }));
        } else {
            res.end(JSON.stringify({ method: "Not Found" }));
        }
    })
});

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
