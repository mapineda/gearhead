var express = require('express'); // call express
var path = require('path'); 
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var instruments = require('./routes/instruments');

var app = express(); // define app using express

//CONNECT TO DATABASE USING MONGOOSE
// var mongoose = require('mongoose');
// mongoose.connect(process.env.MONGO_DB_CONN_GEARHEAD); // connect

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//CONNECT TO DATABASE USING MONGOOSE
var mongoose = require('mongoose');
// mongoose.connect('mongodb://jortron:qazwsxedc@ds041144.mongolab.com:41144/gearheads');
mongoose.connect(process.env.MONGO_DB_CONN_GEARHEAD); // connect
// mongoose.connect('mongodb://marco:password@ds041144.mongolab.com:41144/gearheads', function(err, res) {
//   console.log('noo');
//   console.log(err);

//   if (err) throw err;

//   console.log('Connected to MongoDB');
// });


app.use('/', routes);
app.use('/users', users);
app.use('/instruments', instruments); // is there where this thing goes?

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
