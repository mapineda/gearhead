var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var Account = require('../app/models/account');
var Instrument = require('../app/models/instrument');
var Userlist = require('../app/models/userlist');
var router = express.Router();


router.get('/', function (req, res) {

    var instrument = function(){
    	Instrument.find(function(err, instruments, count){
    		if(err){
				var instrument = null;
				res.redirect("/");
			} else {
				Instrument.find({}, function(err, instruments){
					res.render('index', { user : req.user, instruments: instruments });
				})
			}
    	});
    }
    instrument();
});


router.get('/register', function (req, res) {
    res.render('register', { });
});


router.post('/register', function (req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function (req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});


router.get('/usercreationlist', function(req, res) {
	res.render('usercreationlist');
})

// create a route for post ajax 
router.post('/usercreationlist', function(req, res) {
	var user = req.user;
	var objtest = req.body;

	var userlist = req.body.userlist;
	var listsplit = userlist.split(',');
	console.log(listsplit);


	var newUserlist = new Userlist ({
		userlist: listsplit,
		user : user
	})

	console.log(user);

	newUserlist.save(function(err) {
		if (err) console.log(err);

	// res.redirect('usercreationlist');
	})
});

module.exports = router;
