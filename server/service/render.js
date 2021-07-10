const axios = require("axios")
let server_host ="https://piyush-crud.herokuapp.com"
let local_host ="https://localhost:3000"
// GET /
exports.root = async (req, res) => {
    let data = await axios.get(`${server_host}/api/user/`)
    // console.log(data)
    res.render("index", { data: data.data })
}
// GET /adduser
exports.adduser = (req, res) => {
    res.render("create_user", { link: "/api/user", header: "Add", mess: "Use Below Form To Create New Account" })
}
// GET /update
exports.updateuser = async (req, res) => {
    try {
        // let d = await axios.get("http://localhost:3000/api/user/", { params: { id: qry } })
        let upt = {}
        let qry = req.query.id

        // get usr
        let data = await axios("http://localhost:3000/api/user/")
        // find usr
        for (let key in data.data) {
            if(data.data[key]._id == qry){
                upt = data.data[key]
            }
        }
        console.log(upt)
        res.render("update_user", { link: `/api/user/${upt._id}`, header: "Update", mess: "Update your current Account", data: upt })
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
}