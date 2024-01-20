console.log('router email');

var express = require("express");
var router = express.Router();
const emailController = require("../controllers/email.controller.js");
/* GET users listing. */
router.get("/", emailController.index);
router.get("/add", emailController.add);
router.post("/add", emailController.handleAdd);

module.exports = router;
