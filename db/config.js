const express = require('express');
const app = express();

const mongo = require('mongodb');
const monk = require('monk');
const db = monk('localhost:27017/nodetest1');

// Make our db accessible to our router
dbMiddleware.use(function(req,res,next){
    req.db = db;
    next();
});

module.exports = dbMiddleware;