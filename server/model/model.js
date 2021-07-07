const mongoose = require("mongoose")

const rules = new mongoose.Schema({
	name:{
		type: String,
		require:true
	},
	email:{
		type: String,
		require:true
	},
	gender:{
		type: String,
		require:true
	},
});

module.exports = mongoose.model("user",rules)