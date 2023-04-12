const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;

  response.setHeader("Content-Type", "text/html");
  if (url === "/") {
    response.write(
      `
        <html>


        <head>
        <title>Enter Message</title>
        
        </head>
        <body>
        <form method="POST" action="/log">
        <input type="text" name="message"/>
        <button type="submit">Save</button>
        
        </form>
        
        </body>
        
        
        </html>
          
        `
    );

    response.end();
  }

  if (url === "/log" && method === "POST") {
    /**
     * !        fs.appendFileSync("message.txt", "deneme"); üstüne ekler
     * !        fs.writeFileSync("message.txt", "deneme");  siler ve yeniden yazar
     */
    // fs.writeFileSync("message.txt", "\ndeneme");
    fs.appendFileSync("message.txt", "\ndeneme");
    response.statusCode = 302;
    response.setHeader("Location", "/");
    return response.end();
  }
});

const portNumber = 3000;
S;
server.listen(portNumber);

console.log(`Listenin on port ${portNumber}...`);
