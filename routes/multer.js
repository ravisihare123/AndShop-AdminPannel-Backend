var multer = require("multer");
var path =require("path")
var severPath = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        // console.log(file, path);
       cb(
         null,
         file.fieldname + path.extname(file.originalname)
       );
    }
});

var severPath1 = multer.diskStorage({
  destination: (req, file, path) => {
    path(null, "public/images");
  },
  filename: (req, file, path) => {
    console.log(file, path);

    var newfilename = file.originalname;
    // file.originalname.substring(file.originalname.lastIndexOf("."))
    req["myfilename"] = newfilename;
    req[file.fieldname] = newfilename;

    path(null, newfilename);
  },
});

var multer = multer({ storage: severPath,storage:severPath1 });
module.exports = multer;
