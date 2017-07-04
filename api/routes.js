const apiRoutes = require('express').Router();
const collection = require('./Collection/routes.js');

apiRoutes.use('/collection', collection);

apiRoutes.get('/',function(req,res){
    res.send('api homepage');
});

module.exports = apiRoutes;