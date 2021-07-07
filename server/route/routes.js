const router = require("express").Router();
const controller = require("../controller/controller")
// get root
// router.get("/",(req,res)=>{	res.render("index") })
// get add_user
router.get("/adduser",(req,res)=>{
	res.render("update_user",{link:"/adduser",header:"Add",mess:"Use Below Form To Create New Account"})
})
// get upd_user
router.get("/updateuser",(req,res)=>{
	res.render("update_user",{link:"/updateuser",header:"Update",mess:"Update Your Current Account"})
})

// get data
router.get("/",controller.read)
// post data
router.post("/adduser",controller.create)
// update data
router.put("/updateuser/:id",controller.update)
// delete data

module.exports = router;