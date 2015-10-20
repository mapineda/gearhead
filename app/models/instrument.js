// var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

// var instrumentSchema = new Schema({
// 	model: String,
// 	type: String
// });

// module.exports = mongoose.model('Instrument', instrumentSchema);

// /models/user.js
var mongoose = require('mongoose');

var instrumentSchema = new mongoose.Schema({
 model: String,
 type: String
});

var Instrument = mongoose.model('Instrument', instrumentSchema);

// Make this available to our other files
module.exports = Instrument;