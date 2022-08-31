var dbConfig = require("../database/dbConfig");

//category
async function insertEditCategory(req, res) {
    try {
        const { Aid, id, name, parentid } = req.body;
        const getData = await dbConfig("category_master").where("id", id).first();

        var data = {
            name: name,
            parent_id:parentid
        }

        if (getData) {
            data.updateAt = new Date()
            data.updateBy = Aid
          var update =   await dbConfig("category_master").where("id", id).update(data);
            await dbConfig("logs").insert({
              event_Id: Aid,
              event_name: "category",
              type: "Update",
              createAt: new Date(),
              createBy: id,
            });
            return res.json({
                status: true,
                msg: "category updated!!",
                data: update
            })
        }

        else {
            data.createAt = new Date();
            data.createBy = Aid

            var insert = await dbConfig("category_master").insert(data)
            await dbConfig("logs").insert({
              event_Id: insert[0],
              event_name: "categroy",
              type: "Insert",
              createAt: new Date(),
              createBy:Aid,
            });
            return res.json({
                status: true,
                msg: " category inserted!!",
                data: insert
            })
        }
        
    } catch (err) {
        return res.json({
            status: false,
            msg: err.message
        })
    }
}

async function categoryList(req, res){
    try {
        var getData = await dbConfig("category_master as c")
          .leftJoin("category_master as p", "c.parent_id" ,"=" ,"p.id")
          .select("c.id", "c.name", "c.parent_id","p.name as parent_name")
          .where("c.is_delete",0);
        // console.log(getData);
        return res.json({
            status: true,
            data: getData   
        })
    } catch (err) {
        return res.json({
            status: false,
            msg:err.message
        })
}
}
async function fetchCategoryName(req, res) {
  try {
    var getData = await dbConfig("category_master")
      .select("name")
      .where("parent_id", 0);
    // console.log(getData);
    return res.json({
      status: true,
      data: getData,
    });
  } catch (err) {
    return res.json({
      status: false,
      msg: err.message,
    });
  }
}

async function deleteCategory(req, res) {
    try {
        const { Aid, id } = req.body;
        await dbConfig("category_master").where("id", id).update("is_delete", 1)
        await dbConfig("logs").insert({
          event_Id:id,
          event_name: "categroy",
          type: "delete",
          createAt: new Date(),
          createBy: Aid,
        });
        return res.json({
            status: true,
            msg:"Deleted Data!!!"
        })
        
    } catch (err) {
        return res.json({
            status: false,
            msg:err.message,
        })
    }
}

const master = {
    //category
    insertEditCategory,
    categoryList,
    deleteCategory,
    fetchCategoryName
}

module.exports = master;