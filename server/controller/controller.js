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
        // res.redirect("/")
        // res.send(pass)
        res.redirect("/")
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
}
// get data
exports.read = async (req, res) => {
    try {
        // let data = []
        const data = await user.find({})
        // read.map((dt) => data.push(dt))
        // req.data = data
        // res.render("index", { data: data })
        res.send(data)
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
}
// update data (filer,update) : fing by id & update
exports.update = async (req, res) => {
    try {
        let id = req.params.id
        let usr = await user.findByIdAndUpdate(id,{
            name: req.body.name,
            email:req.body.email,
            gender: req.body.gender
        })
        // res.send(usr)
        res.redirect("/")
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }

}
// dalate data
exports.delete = async (req, res) => {
    try {
        let id = req.params.id
        let usr = await user.findOneAndDelete({_id:id})
        // res.send(usr)
        res.redirect("/")
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }

}