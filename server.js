// init exp
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const path  = require("path")
const router = require("./server/route/routes")
const dotenv=require("dotenv")
const connectDB = require("./server/db/connect")
// module
const morgan = require("morgan")
const bodyParser = require("body-parser")

// security
dotenv.config()
// log mess
app.use(morgan("tiny"))
// connect DB
connectDB();
// req data
app.use(express.static(path.resolve(__dirname,"public")))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// template engine
app.set("view engine","pug")

// load routes
app.use("/",router)


app.listen(PORT,()=>{
	console.log('http://localhost:3000 running... ')
})