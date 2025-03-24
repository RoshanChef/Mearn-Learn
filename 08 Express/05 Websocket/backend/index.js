"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
var ws = new ws_1.WebSocketServer({ port: 3000 });
ws.on("connection", function (socket) {
    console.log("user connected .. ");
    // setInterval(() => {
    //     socket.send('Price gold : $' + Math.random() * 1000);
    // }, 500);
    socket.on("message", function (msg) {
        console.log("message : ", msg.toString());
        if (msg == 'ping') {
            setTimeout(function () {
                socket.send('pong');
            }, 2000);
        }
    });
});
