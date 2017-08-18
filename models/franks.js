var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionsSchema = new Schema({
	question: String,
	answer: String
});

var FranksSchema = new Schema({
	subdomain: String,
	password: String,
	questions: [QuestionsSchema]
});
