var express = require('express');
var router = express.Router();
const admin = require("../controller/master");
const baseHelper = require("../helper/bashelpers");

//category
router.post("/insertEditCategory", admin.insertEditCategory);
router.post("/categroyList",baseHelper.CheckAdminToken, admin.categoryList);
router.post("/deleteCategory", admin.deleteCategory);
router.get("/fetchCategoryName", admin.fetchCategoryName);


module.exports = router;
