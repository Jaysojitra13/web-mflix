require('dotenv').config();
var express  = require('express');
var mongoose = require('mongoose');
var app      = express();
var database = require('./config/database');
 
var port     = process.env.PORT || 8000;
app.use(express.urlencoded({'extended':'true'}));
app.use(express.json());

mongoose.connect(database.url);

app.use('/api/v1', require('./routes/v1'));

app.listen(port);
console.log("App listening on port : " + port);