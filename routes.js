const routes = require('express').Router();
const api = require('./api/api.js');
const timestamp = require('./utils/timestamp.js');

// Middleware to log every request
routes.use(function(req, res, next) {
    console.log(timestamp()+"  ("+req.method+")  "+req.url);
    next();
});

routes.use('/api',api);

routes.get('/',function(req,res){
    res.send('website homepage');
});

module.exports = routes;