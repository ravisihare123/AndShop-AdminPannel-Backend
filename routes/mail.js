var express = require("express");
var router = express.Router();
const mail = require("../controller/mail");
router.post("/mailSend", mail.mailSend);

module.exports = router;
