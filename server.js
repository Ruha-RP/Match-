//============
//DEPENDANCIES
//============
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Setting up express
var app = express();
var PORT = process.env.PORT || 8080;

//Setting up Express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//checking route:
app.get("/", function(req,res) {
	res.send("Hello World!")
});

//=================
//LISTENING TO PORT
//=================
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
})