// /*
// __filename: this is providing to us current file name

// __dirname: this is providing to us current file directory

// */

// const path = require("path");

// let result = path.resolve("scriptA.js");

// result = path.extname("scriptA.js");

// result = path.parse(__filename);

// console.log(result.root);
// console.log(result.dir);
// console.log(result.base);
// console.log(result.ext);
// console.log(result.name);

// console.log(__filename);
// console.log(__dirname);
// // public members
// var firstName = "Sadık";
// var log = function (name) {
//   console.log(name);
// };

// exports = {
//   firstName,
//   log,
// };

// const url = require("url");

// const address = "https://www.youtube.com/watch?v=x5q7u9mRbz0";

// let result1 = url.parse(address, true);

// console.log(result1);
// console.log(result1.path);

const fs = require("fs");

// const files = fs.readdir("./", function (error, data) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// const data = fs.readFile("index.html", "utf8", function (error, data) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

/* writeFile metodu her tekrarda dosyayı en son şekline göre yeniden oluşturuyor*/
// fs.writeFile(
//   "deneme.js",
//   "const path=require('path');",
//   function (error, data) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(data);
//     }
//   }
// );

/**  * ! appendFile metodu her tekrarda dosyanın üzerine yazıyor yani ekleme yapıyor. bir nevi dizilerdeki push metodu gibi */

// fs.appendFile(
//   "deneme1.js",
//   "const path=require('path')",
//   function (error, data) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(data);
//     }
//   }
// );

fs.unlink("deneme1.js", function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log("Dosya Başarılı Bir Şekilde Silindi");
    console.log(data);
  }
});

fs.rename("deneme.js", "app.js", function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log("Dosya Başarılı Bir Şekilde Yeniden İsimlendirildi...");
    console.log(data);
  }
});
