const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hello from the built-in Node.js HTTP server!");
});

server.listen(3000, () => console.log("Open http://localhost:3000"));
