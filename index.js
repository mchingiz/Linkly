// ---------------
// Declarations and dependencies
// ---------------
require('dotenv').config();
const express = require('express');
const app = express();
const validator = require('express-validator');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const routes = require('./routes.js');
const validation = require('./validation.js');
const requestLogger = require('./utils/requestLogger.js');

// ---------------
// Configurations
// ---------------

var port = process.env.PORT || 8000;

// var con = api.getConnection(mysql);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(validator());

// ---------------
// Functionality
// ---------------

app.use('/',requestLogger);
app.use('/',validation);
app.use('/',routes);

app.listen(port,function(){
    console.log('listening on port '+port);
    // console.log(this.listenerCount());
});


// console.log(api.collection.get(con,seq));
