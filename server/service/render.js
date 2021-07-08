const axios = require("axios")
// GET /
exports.root = async (req, res) => {
    let data = await axios.get("http://localhost:3000/api/user/")
    // console.log(data)
    res.render("index", { data: data.data })
}
// GET /adduser
exports.adduser = (req, res) => {
    res.render("update_user", { link: "/api/user", header: "Add", mess: "Use Below Form To Create New Account" })
}
// GET /update
exports.updateuser = async (req, res) => {
    try {
        let data = await axios.get("http://localhost:3000/api/user/", { params: {_id: req.query.id} })
        console.log(data)
        res.render("update_user", { link: "/api/user", header: "Update", mess: "Update your current Account", data: data.data })
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
}