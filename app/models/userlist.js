var mongoose = require('mongoose');

var userlistSchema = new mongoose.Schema({
	userlist: Array,
	userId: String
});

var Userlist = mongoose.model('Userlist', userlistSchema);

// Make this available to our other files
module.exports = Userlist;