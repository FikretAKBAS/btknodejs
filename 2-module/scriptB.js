// Browser ortamında Farklı dosyalarda bulunan metodları vs başka bir dosya içerisinde nasıl kullanırız?
//IIFE (Immediately Invoked Function Expression) (Anından Çağrılan Fonksiyon)

// var controllerB = (function () {
//   //scope B

//   // private members
//   var firstName = "AKBAŞ";
//   var log = function () {
//     console.log(this.firstName);
//   };

//   //public members
//   return {
//     firstName,
//     log,
//   };
// })();

// document.write("<h5>From Controller A:</h5> " + controllerA.firstName);
// document.write("<h5>From Controller B:</h5> " + controllerB.firstName);

// console.log(controllerA.firstName);
// console.log(controllerB.firstName);

/* NodeJs - Yukarıda yapılan işlem NODE JS Ortamında Nasıl Yapılıyor*/

//scriptA.js dosyasında oluşturup dışarı aktardığımız metodları yakalamak için şu işlem sırası yürütülür.
// 1 - Değişken tanımlanıp require edilir.
const scriptA = require("./scriptA");

scriptA.log("Çınar");
console.log(scriptA.name);

console.log(scriptA.age);
