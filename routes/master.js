var express = require('express');
var router = express.Router();
const admin = require("../controller/master");

//category
router.post("/insertEditCategory", admin.insertEditCategory);


module.exports = router;
