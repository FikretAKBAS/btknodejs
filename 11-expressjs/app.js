const express = require("express");

const app = express();

const path = require("path");

app.set("view engine", "pug");
app.set("views", "./views/");

const bodyParse = require("body-parser");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(userRoutes);

app.use((req, res) => {
  res.status(404).render("404");
});
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/api/products", (req, res) => {
//   res.send("Ürünler listelendi");
// });

app.listen(3000, () => {
  console.log("listening on port 3000");
});
