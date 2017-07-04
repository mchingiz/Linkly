const routes = require('express').Router();
const timestamp = require('./timestamp.js');

// Middleware to log every request
routes.use(function(req, res, next) {
    console.log(timestamp()+"  ("+req.method+")  "+req.url);
    next();
});

module.exports = routes;