var mongoose = require('mongoose');

var instrumentSchema = new mongoose.Schema({
	model: String,
	type: String
});

var Instrument = mongoose.model('Instrument', instrumentSchema);

// Make this available to our other files
module.exports = Instrument;