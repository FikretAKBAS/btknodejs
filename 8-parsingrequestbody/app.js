const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes);

const portNumber = 3000;

server.listen(portNumber);

console.log(`Listenin on port ${portNumber}...`);
