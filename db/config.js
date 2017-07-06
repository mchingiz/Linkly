const express = require('express');
const app = express();

const mongoose = require('mongoose');
const connectionPromise = mongoose.connect('mongodb://localhost:27017/nodetest1',{
    useMongoClient: true
});

// Make our db accessible to our router
connectionPromise.then(function(db){
    console.log('dbConnected');

    app.use(function(req,res,next){
        req.db = db;
        next();
    });
});

module.exports = app;