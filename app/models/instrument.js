var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var InstrumentSchema = new Schema({
	model: String,
	type: String
});

module.exports = mongoose.model('Instrument', InstrumentSchema);