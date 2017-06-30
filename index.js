// ---------------
// Declarations and dependencies
// ---------------
require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');

const bodyParser = require('body-parser');
const routes = require('./routes.js');

// ---------------
// Configurations
// ---------------

var port = process.env.PORT || 8000;

// var con = api.getConnection(mysql);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ---------------
// Functionality
// ---------------

// app.use('/',routes);

app.use('/',routes);



app.listen(port,function(){
    console.log('listening on port '+port);
});

// console.log(api.collection.get(con,seq));
