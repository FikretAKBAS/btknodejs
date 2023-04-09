const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   res.setHeader("Content-Type", "text/plain");
  //   res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.statusMessage = "Ok";

  //   res.write(JSON.stringify({ name: "Fikret", age: 27 }));

  /**
   *  ! res.write("<html>");
   * ! res.write("<head><title>My First Page</title></head>");
   * ! res.write("<body><h1>Hello From Ankara</h1></body>");
   * ! res.write("</html>");
   * ! res.end();
   */

  fs.readFile("indexx.html", function (error, file) {
    if (error) {
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 404;
      res.statusMessage = "Not Found";
      res.write("Dosya Bulunamadı");
      res.end();

      // or you can use that code line instead of top code lines
      // res.end("Dosya bulunamadı");
    } else {
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 200;
      res.statusMessage = "Ok";
      res.end(file);
    }
  });
});

server.listen(3000);
console.log("Listening port on 3000...");
