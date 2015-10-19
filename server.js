// server.js

// BASE SETUP

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

//CONNECT TO DATABASE
var mongoose = require('mongoose');
mongoose.connect(); //connect to our database

// Call the packages we need

var express = require('express'); // call express

var app = express(); // define app using express

var Instrument = require('./app/models/app');

var bodyParser = require('body-parser');

// configure app to use bodyParser()

// this will let us get the data from a POST

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

// ROUTES FOR API 

//  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
var router = express.Router(); // get an instance of the express router

//middleware to use for all requests
router.use(function(req, res, next) {
	//do logging
	console.log('Something is happening.');
	next(); // make sure we go to the next routes and don't stop there

});
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'Welcome to Gig-Tracker!' });
});

// more routes for our API will happen here

//REGISTER OUR ROUTES - - - - - - - - - - - - - - - -
//All of our routs will be prefixed with /api
app.use('/api', router);

//START THE SERVER
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
app.listen(port);
console.log('Magic happens on the port ' + port); 
