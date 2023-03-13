var express = require("express");
var socket = require("socket.io");
var app = express();

var port = 8088;

var server = app.listen(port, () => {
    console.log(`Socket Server running at ${port} - http://localhost:${port}`);
});

// http://localhost:8088/
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

var io = socket(server);

io.on("connection", (client) => {
    console.log(`Client Connection request : ${client.id}`);
    
    client.emit("welcome", "Welcome to Socket.io Chat Server");


    client.on("hello", (data) => {
        console.log(data);

        const notice = {
            status: false,
            message: "Message to all"
        }
    
        client.broadcast.emit("notice", notice);
    });

    client.on("disconnect", () => {
        console.log(`Client disconnected : ${client.id}`);
    });
}); 