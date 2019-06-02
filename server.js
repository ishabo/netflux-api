/**
 * الملف الرئيسي لواجهة التطبيق البرمجية
 */
const http = require("http");

// خلق خادم
const server = http.createServer(function(req, res) {
  if (req.url === "/google") {
    res.writeHead(302, { Location: "https://google.com" });
    res.end();
  } else if (req.url === "/hello") {
    res.end("مرحبا أيها العالم!");
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

// الاستماع إلى بوابة
server.listen(3000, function() {
  console.log("المخدم الآن يستمع إلى البوابة رقم 3000");
});
