var express = require("express");
var router = express.Router();
const users = require("../controller/users");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post("/insertEditUserlogin", users.insertEditUserlogin);
router.post("/userLogin", users.Userlogin);

module.exports = router;
