var express = require('express');
var path = require('path');

var AV = require('leanengine');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var content = require('./routes/content');
var device = require('./routes/device');

var app = express();


var APP_ID = process.env.LC_APP_ID || '1ootsw3y4smje21veqtkn2w6xtk1al2hdn6xs05vvzp0ed4k'; // 你的 app id
var APP_KEY = process.env.LC_APP_KEY || 'p0ir4kljnq05g4jm7udb7u2lrk45cy1c5hawkufgtkcck00p'; // 你的 app key
var MASTER_KEY = process.env.LC_APP_MASTER_KEY || '08bxm7la9pmjyho85vsijehqr53pjbrrh02t80c0ut7l2vj7'; // 你的 master key
AV.initialize(APP_ID, APP_KEY, MASTER_KEY);


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


app.use('/', routes);
//app.use('/users', users);
app.use('/content', content);
app.use('/device', device);

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
