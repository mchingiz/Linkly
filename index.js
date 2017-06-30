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

app.use('/',validation);
app.use('/',routes);

app.listen(port,function(){
    console.log('listening on port '+port);
});

// console.log(api.collection.get(con,seq));
