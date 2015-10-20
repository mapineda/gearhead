var express = require('express');
var router = express.Router();

// Require the Instrument model
var Instrument = require('../app/models/instrument');

/* GET INSTRUMENT listing. */
router.get('/', function(req, res, next) {
	console.log('what');
	Instrument.find({}, 'model type', function(err, instrument) {
		console.log('que');
  if (err) console.log(err);
  console.log(instrument);
});
  res.send('Instrument is working');
});


/* FIND aka READ */





/* POST instrument listing */ 

router.post('/', function(req, res, next) {
    var model = req.body.model;
    var type = req.body.type;
    // console.log(model);  

    var newInstrument = Instrument({
        model: model,
        type: type
      
    });
    console.log(newInstrument);


// router.post('/', function(req, res, next) {
//     res.render('instruments/show', {
//         model: req.body.model,
//         type: req.body.type
//     });

/* Save the Instrument */
    newInstrument.save(function(err) {
        if (err) console.log(err);

        res.send('Instrument created!');
    });
});

module.exports = router;

