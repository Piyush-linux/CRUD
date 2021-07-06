// init exp
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const dotenv=require("dotenv")
// module
const morgan = require("morgan")
const bodyParser = require("body-parser")

// security
dotenv.config()
// log mess
app.use(morgan("tiny"))
// req data
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));
// template engine
app.set("view engine","pug")


app.get("/",(req,res)=>{
	res.render("index")
})

app.listen(PORT,()=>{
	console.log('http://localhost:3000 running... ')
})