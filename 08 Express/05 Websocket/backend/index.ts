import { WebSocketServer } from 'ws';
const ws = new WebSocketServer({ port: 3000 });

ws.on("connection", (socket) => {
    console.log("user connected .. ");

    // setInterval(() => {
    //     socket.send('Price gold : $' + Math.random() * 1000);
    // }, 500);

    socket.on("message", (msg) => {
        console.log("message : ", msg.toString());

        if (msg == 'ping')
            socket.send('pong');
    })

})