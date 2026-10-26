const net = require("net");

const server = net.createServer((socket) => {
    console.log("Client connected");

    socket.write("Hello from TCP Server!");

    socket.on("data", (data) => {
        console.log("Client says:", data.toString());
    });
});

server.listen(5000, () => {
    console.log("Server running on port 5000");
});