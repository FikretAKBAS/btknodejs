const express = require("express");

const app = express();

const bodyParse = require("body-parser");

app.use(bodyParse.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/api/products", (req, res) => {
//   res.send("Ürünler listelendi");
// });

app.use("/add-product", (req, res, next) => {
  res.send(
    `<html>
    <head>
    <title>Add A New Product</title>
    </head>
    <body>
    <form action="/product" method="POST">
    <input type="text" name="productName" > 
    <input type="submit" value="Save Product"> 
    
    </form>
    
    </body>
    
    </html>`
  );
});

app.post("/product", (req, res, next) => {
  //database kayıt yapılabilir
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello From Express.js</h1>");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
