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

	app.get("/", function(req, res) {

		res.send("Hello New User!");

	});
}



var htmlRoutes = {

}

app.get("/", function(req,res) {
	res.send("Hello World!")
});