const mongoose = require("mongoose")

const connectDB = async ()=>{
	// connect
	try{
		const con = await mongoose.connect(process.env.DB,{ useNewUrlParser: true  , useUnifiedTopology: true })
		console.log('MonogoDB connected...')
	}
	// not connect
	catch(err){
		console.log(err)
		process.exit(1)
	}

}

module.exports = connectDB;