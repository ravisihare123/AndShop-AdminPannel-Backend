var dbConfig = require("../database/dbConfig");

//category
async function insertEditCategory(req, res) {
    try {
        const { id, name } = req.body;
        
    } catch (err) {
        return res.json({
            status: false,
            msg: err.message
        })
    }
}

const master = {
    //category
    insertEditCategory,
}

module.exports = master;