var express = require('express');
var router = express.Router();
const master = require("../controller/master");
const baseHelper = require("../helper/bashelpers");
var multer = require("./multer");


//category
router.post("/insertEditCategory",baseHelper.CheckAdminToken, master.insertEditCategory);
router.post("/categroyList",baseHelper.CheckAdminToken, master.categoryList);
router.post("/deleteCategory",baseHelper.CheckAdminToken, master.deleteCategory);
router.get("/fetchCategoryName", master.fetchCategoryName);

//product
router.post("/insertEditProduct",baseHelper.CheckAdminToken,multer.array("img"), master.insertEditProduct);
router.post("/productList", master.productList);
router.post("/deleteProduct",baseHelper.CheckAdminToken, master.deleteProduct);
router.get("/fetchParentName", master.fetchParentName);
// router.post("/fetchSubcat", master.fetchProductSubCat);

//Banner
router.post(
  "/insertEditBanner",
  multer.fields([
    { name: "image1" },
    { name: "image2" },
    { name: "image3" },
    { name: "image4" },
    { name: "image5" },
  ]), baseHelper.CheckAdminToken,
  master.InsertEditBanner
);
router.post("/bannerList", master.bannerList);


module.exports = router;
