const Logger = require("./logger");
const logger = new Logger();

// Listener Kayıt Et

// event'i tetikle

logger.on("connection", function (args) {
  console.log("Veri Tabanı İle Bağlantı Başarıyla Kuruldu.", args);
});

logger.log("Fikret akbaş giriş yaptı");
