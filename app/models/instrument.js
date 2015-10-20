var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var instrumentSchema = new Schema({
	model: String,
	type: String
});


module.exports = mongoose.model('Instrument', instrumentSchema);