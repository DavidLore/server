var express = require('express');
var bodyParser = require('body-parser');
var routes = require('../routes/index.route');

var app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mount all routes on /api path
app.use('/api', routes);

module.exports = app;