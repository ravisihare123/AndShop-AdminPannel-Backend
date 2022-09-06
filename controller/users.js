const dbConfig = require("../database/dbConfig");
const bcrypt = require("bcrypt");

async function insertEditUserlogin(req, res) {
  try {
    const { name, email, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    var data = {
      name: name,
      email: email,
      password: bcrypt.hashSync(password, salt),
    };

    data.createAt = new Date();
    data.createBy = 1;

    await dbConfig("user_login").insert(data);
    return res.json({
      status: true,
      msg: "Inserted Successfully!!",
    });
  } catch (err) {
    return res.json({
      status: false,
      msg: err.message,
    });
  }
}

async function Userlogin(req, res) {
  try {
    const { email, password } = req.body;
    var user = await dbConfig("user_login")
      .where("email", email)
      .where("isdelete", 0)
      .first();
    //   console.log(user);
    const checkpassword = bcrypt.compareSync(password, user.password);
    if (checkpassword) {
      return res.json({
        status: true,
        msg: "login Successfully!!",
        // data: user,
      });
    } else {
      return res.json({
        status: false,
        msg: "unsuccessfull",
        // data: user,
      });
    }
  } catch (err) {
    return res.json({
      status: false,
      msg: err.message,
    });
  }
}

const users = {
  insertEditUserlogin,
  Userlogin,
};
module.exports = users;
