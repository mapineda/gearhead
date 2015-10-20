// server.js

// BASE SETUP

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 



// Call the packages we need

var express = require('express'); // call express

var morgan = require('morgan');

var app = express(); // define app using express

var bodyParser = require('body-parser');




// configure app to use bodyParser()

// this will let us get the data from a POST
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 8080; // set our port


//CONNECT TO DATABASE USING MONGOOSE

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_CONN_GEARHEAD); // connect

var Instrument = require('./app/models/instrument');
// ROUTES FOR API 

//  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
var router = express.Router(); // get an instance of the express router

//middleware to use for all requests
// router.use(function(req, res, next) {
// 	//do logging
// 	console.log('Something is happening.');
// 	next(); // make sure we go to the next routes and don't stop there
// });

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'Welcome to Gig-Tracker!' });
});

// more routes for our API will happen here

// on routes that end in /instruments
// - - - - - - - - - - - - - - - - - - - - - - - - - -
router.route('/instruments')

	// create a bear (accessed at POST http://localhost:8080/api/instrument)
	.post(function(req, res) {
		var instrument = new Instrument({
			//type: req.body.type,
			fake: 'fake value'
		});  // create a new instance of the instrument model
		// console.log('idk my bff jill');
		//instrument.type = req.body.type;
		// instrument.model = req.body.model; //set the instrument name (comes from the request)
		console.log(instrument);
		// save the instrument and check for errors
		Instrument.create({
			type: req.body.type
		}, function(err) {
			if (err) console.log(err);

			res.send('success!');
		})
		// instrument.create(function(err) {
		// 	console.log('instrument saved');
		// 	if (err) {
		// 		console.log(err);
		// 	}
		// 	res.send('finished');
		// 	//res.json({ message: 'Instrument created!' });
		// });

		res.send('not finished yet');

	});
//REGISTER OUR ROUTES - - - - - - - - - - - - - - - -
//All of our routes will be prefixed with /api
app.use('/api', router);

//START THE SERVER
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
app.listen(port);
console.log('Magic happens on the port ' + port); 
