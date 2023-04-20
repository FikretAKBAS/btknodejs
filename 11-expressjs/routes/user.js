const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = [
    {
      name: "Samsung S8",
      price: 3000,
      image: "1.jpg",
      description: "First Product",
    },
    {
      name: "Samsung S8",
      price: 4000,
      image: "2.jpg",
      description: "First Product",
    },
    {
      name: "Samsung S8",
      price: 50000,
      image: "3.jpg",
      description: "Third Product",
    },
    {
      name: "Samsung S8",
      price: 65000,
      image: "4.jpg",
      description: "Fourth Product",
    },
  ];
  res.render("index", { title: "Home Page", products: products });
});

module.exports = router;
