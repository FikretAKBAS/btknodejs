/**
 * ! HTTP module is using to create a new server.

 */

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/api/products") {
    res.write("product list");
    res.end();
  }
});
const portNumber = 5000;

server.listen(portNumber);

console.log(`Listenin port on ${portNumber}...`);
