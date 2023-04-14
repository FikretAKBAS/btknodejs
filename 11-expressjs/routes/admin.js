const express = require("express");
const router = express.Router();

router.use("/add-product", (req, res, next) => {
  res.send(
    `<html>
    <head>
    <title>Add A New Product</title>
    </head>
    <body>
    <form action="/" method="POST">
    <input type="text" name="productName" > 
    <input type="submit" value="Save Product"> 
    
    </form>
    
    </body>
    
    </html>`
  );
});

router.post("/add-product", (req, res, next) => {
  //database kayıt yapılabilir
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
