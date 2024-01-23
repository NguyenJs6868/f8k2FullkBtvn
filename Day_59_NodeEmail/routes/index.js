console.log('router index');

var express = require("express");
var router = express.Router();
const sendMail = require("../utils/mail");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// router.get("/send-mail", async (req, res) => {
//   const info = await sendMail(
//     "hoangan@fullstack.edu.vn",
//     "Xin chào lớp Fullstack K2",
//     "Tôi là giảng viên lớp Fullstack K2",
//   );
//   res.json(info);
// });
//
// router.get("/send-email", async (req, res) => {
//   const data = {
//     mailFrom: 'hoangan@fullstack.edu.vn',
//     titleMail: 'hoangan@fullstack.edu.vn',
//     contentMail: 'hoangan@fullstack.edu.vn',
//   }
//   const info = await sendMail(
//     data.mailFrom,
//     data.titleMail,
//     data.contentMail,
//   );
//   res.json(info);
// });

module.exports = router;
