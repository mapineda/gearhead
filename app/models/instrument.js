var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var InstrumentsSchema = new Schema({
	model: String,
	type: String
});

module.exports = mongoose.model('Instrument', InstrumentsSchema);