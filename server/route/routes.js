const router = require("express").Router();
const render=require("../service/render")
const controller = require("../controller/controller")
// get root
router.get("/",render.root)
// get add_user
router.get("/adduser",render.adduser)
// get upd_user
router.get("/updateuser",render.updateuser)

// get data
router.get("/api/user",controller.read)
// post data 
router.post("/api/user",controller.create)
// update data
router.put("/api/user/:id",controller.update)
// delete data
router.delete("/api/user/:id",controller.delete)

module.exports = router;