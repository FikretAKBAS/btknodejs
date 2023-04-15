const express = require("express");
const router = express.Router();

const path = require("path");

router.use("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  //database kayıt yapılabilir
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
