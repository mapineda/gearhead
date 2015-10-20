var express = require('express');
var router = express.Router();

// Require the Instrument model
var Instrument = require('../models/instrument');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Instrument is working');
});

/* POST instrument listing */ 

router.post('/', function(req, res, next) {
    var name = req.body.model;
    var type = req.body.type;
      

    var newInstrument = User({
        model: model,
        type: type,
      
    });


module.exports = router;