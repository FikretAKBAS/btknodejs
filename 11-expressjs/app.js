const express = require("express");

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/api/products", (req, res) => {
//   res.send("Ürünler listelendi");
// });

app.use((req, res, next) => {
  console.log("Middlware 1 is working..");
  next();
});

app.use((req, res, next) => {
  console.log("Middlware 2 is working..");
  res.send("<h1>Hello World From Node Js</h1>");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
