var express = require('express');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');
var Franks = require('./models/franks.js');

var app = express();
var port = process.env.PORT || 8080;
app.listen(port);
console.log(`app listening on port: ${port}`);

nunjucks.configure('views', {
	autoescape: true,
	express: app
});

app.get('/', function (req, res) {
	res.render('index.html');
});

