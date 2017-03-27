var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.post('/token',  function(req, res) {
     var mytoken= "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OGQ1MjYxZDMwNTlmNzI3YzAzZjYzNTMiLCJuYW1lIjoiQW5hcyIsInBhc3N3b3JkIjoiJDJhJDEwJExFZUpONkE1NVJueXFkc3RHU21TT3VCS01PVEF0ZGZEMHJxVkFNWmVQVzl4OU5URnFzdnpDIiwiX192IjowfQ.2SWlwugKLJst0qzDlg6VOqw0-HIvuIXOgOLkuAzxXgo";
//res.json({success: true, msg: 'Successful created new user.'});
    res.json({access_token: mytoken});
   
});





















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

function displayResult(result){
    console.log(result);
}
 
function displayError(err){
    console.error(err);
}
 

module.exports = app;
