const fs = require("fs");
const qs = require("querystring");

const routeHandler = (request, response) => {
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
    // body parsing (bodyParser)

    const body = [];
    request.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });

    request.on("end", () => {
      const bodyParsed = Buffer.concat(body).toString();
      const message = bodyParsed.split("=")[1];

      console.log(qs.parse(bodyParsed));
      fs.appendFileSync("message.txt", message);
    });

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
};

module.exports = routeHandler;
