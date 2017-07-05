const routes = require('express').Router();
const api = require('../api/routes.js');


routes.use('/api',api);

// Test route
routes.post('/test',function(req,res){
    console.log('test');

});

routes.get('/',function(req,res){
    res.send('website homepage');
});


module.exports = routes;