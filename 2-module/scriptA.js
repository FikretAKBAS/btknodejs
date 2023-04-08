// Browser ortamında Farklı dosyalarda bulunan metodları vs başka bir dosya içerisinde nasıl kullanırız?

//IIFE (Immediately Invoked Function Expression) (Anından Çağrılan Fonksiyon)
// var controllerA = (function () {
//   //scope A

//   // private members
//   var firstName = "Fikret";

//   var log = function () {
//     console.log(this.firstName);
//   };

//   // public members
//   return {
//     firstName,
//     log,
//   };
// })();

/* NodeJs - Yukarıda yapılan işlem NODE JS Ortamında Nasıl Yapılıyor*/

// 1 - Öncelikle metodları tanımladık

//private members
var age = 30;

// public members
var firstName = "Sadık";
var log = function (name) {
  console.log(name);
};

// 2 - Ardından dışarıya aktarmak istediğimiz metodlarımızı aşağıdaki gibi yazıp export ediyoruz.

// 3 - Dışarı Aktarılacak Öğeler aşağıda olduğu gibi tek tek dışarı aktarılabilir

// module.exports.name = firstName;
// module.exports.log = log;

// 4 - Dışarı Aktarılacak Öğeler tek tek aktarılabileceği gibi şu şekilde toplu bir biçimde de aktarılabilir.

// module.exports = {
//   name: firstName,
//   log: log,
// };

// veya

module.exports = {
  firstName,
  log,
};
