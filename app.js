var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//________________________________________flash use karne ke liye require
const session = require("express-session");
const flash = require("express-flash");
const bodyParser = require("body-parser")
//_________________________________________3 packej require use flash

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//__________________use session (express-session)
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret:"raju raju",
  cookie:{
    maxAge:60000
  }
}));
app.use(flash());  // use flash
app.use(bodyParser.urlencoded({extended:false})) // bodyParser {extended:false}
app.use(bodyParser.json()); // bodyParser.json()
//_____________________________________________

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
