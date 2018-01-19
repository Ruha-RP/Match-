//============
//DEPENDANCIES
//============

var path = require("path");
var express = require("express");
var app = express();

//===========
//HTML ROUTES
//===========

module.exports = function(app) {


	app.get("/api/", function(req, res) {

		res.sendFile(path.join(__dirname, "../public/survey.html"));

	});


}