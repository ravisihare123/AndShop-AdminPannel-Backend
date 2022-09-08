var express = require("express");
var router = express.Router();
const payment = require("../controller/payment");
/* GET home page. */
router.post("/addmoney",payment.AddmoneyByrozarpay);
module.exports = router;
