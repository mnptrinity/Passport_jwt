var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport=require('passport');
var movieRoutes = require('./routes/movie');
var genreRoutes = require('./routes/genre');
var userRoutes=require('./routes/user');
require('./mongoose/connection');

var app = express();


require('./passport/passport')(passport);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(passport.initialize());
app.use(passport.session());
app.use('/',userRoutes);
app.use('/movie', movieRoutes);
app.use('/genre', genreRoutes);


module.exports = app;
