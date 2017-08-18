var express = require('express'),
    mongoose = require('mongoose'),
    nunjucks = require('nunjucks'),
    Franks = require('./models/franks.js');

var app = express();
var port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`app listening on port: ${port}`);
});

nunjucks.configure('views', {
	autoescape: true,
	express: app
});

app.get('/', (req, res) => {
	res.render('index.html');
});

