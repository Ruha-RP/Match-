//============
//DEPENDANCIES
//============

var path = require("path");
var express = require("express");
var app = express();

//===========
//DATA SOURCE
//===========

//===========
//API ROUTES
//===========

module.exports = function(app) {


	app.get("/api/foods", function(req, res) {

		res.sendFile(path.join(__dirname, "../data/foods.js"));

	});


}