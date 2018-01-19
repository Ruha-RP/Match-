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


	app.post("/api/new", function(req, res){

	var newComfortFood = req.body;

	console.log(newComfortFood);

	

	
	//================
	//COMPARISON LOGIC
	//================

	//new variable array to hold difference
	var Diff = 0;
	

	//for loop that will go through the API
	for (var i = 0; i < comfortFoodArray.length; i++) {

		var diffArray =[];

		for (var j = 0; j < 10; j++) {

			Diff = Math.abs(parseInt(newComfortFood.scores[j]) - parseInt(comfortFoodArray[i].scores[j]));
			
			diffArray.push(Diff);

		}

		//now this can be used to calculate difference
		console.log(diffArray);
		var totalDifference;

		//adding elemnts in an array


	}


	//=======
	//LOGGING
	//=======
	comfortFoodArray.push(newComfortFood);

	res.json(true);

	console.log("Food logged!");
	





});

};