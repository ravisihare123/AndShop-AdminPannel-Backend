var express = require('express');
var router = express.Router();
const admin = require("../controller/master");

//category
router.post("/insertEditCategory", admin.insertEditCategory);
router.post("/categroyList", admin.categoryList);
router.post("/deleteCategory", admin.deleteCategory);


module.exports = router;
