var _ = require("underscore");

var numbers = [10, 5, 100, 2, 1000];
console.log(_.min(numbers));

/**
 * ! Yerel paket: eğer bir projede indirilen paket sadece o proje için gerekiyorsa o paket yerel pakettir.
 * ! --save-dev : sadece uygulama geliştirme aşamasında kullanacaksan bu şekilde yükleyeceksin. bu paketler proje geliştirme bittikten sonra işimize yaramayacak.
 * ! --global : şeklinde yüklersen paket bilgisayara inecektir ve tüm projelerinde kullanabileceksin.
 * ! "webpack": "^5.78.0" // 5 : major, 78 : minor, 0 : patch
 */
