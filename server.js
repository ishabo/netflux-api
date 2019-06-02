/**
 * الملف الرئيسي لواجهة التطبيق البرمجية
 */
const http = require("http");

// خلق خادم
const server = http.createServer(function(req, res) {
  // البحث عن مسار الأفلام
  const path = req.url;

  // إرجاع لائحة الأفلام
  if (path === "/movies") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });

    res.end(
      JSON.stringify([
        {
          title: "I am legend"
        },
        {
          title: "Me in black"
        },
        {
          title: "The pianist"
        }
      ])
    );
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=utf-8"
    });
    res.end("العنوان المطلوب غير موجود");
  }
});

// الاستماع إلى بوابة
server.listen(3000, function() {
  console.log("المخدم الآن يستمع إلى البوابة رقم 3000");
});
