const user = require("../model/model")
// post data
exports.create = async (req, res) => {
    // data valdation
    try {
        // crt data
        const usr = new user({
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender
        })
        // save data
        const pass = await usr.save()
        console.log("pass")
        res.redirect("/")
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
}
// get data
exports.read = async (req, res) => {
    try {
        let data = []
        const read = await user.find({})
        read.map((dt) => data.push(dt))
        // req.data = data
        res.render("index", { data: data })
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
}
// update data (filer,update)
exports.update = async (req, res) => {
    try {
        let param = req.params.id
        let usr = await user.updateOne({ email: param }, {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender
        })
        res.redirect("/")
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }

}
// dalate data