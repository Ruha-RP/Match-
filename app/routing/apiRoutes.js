//============
//DEPENDANCIES
//============

var path = require("path");
var express = require("express");
var app = express();

//===========
//DATA SOURCE
//===========

var comfortFoodArray = require("../data/foods.js")

//===========
//API ROUTES
//===========

module.exports = function(app) {


	app.get("/api/foods", function(req, res) {

		res.json(comfortFoodArray);

	});

}