const apiRoutes = require('express').Router();
const collection = require('./collection.js');

apiRoutes.use('/collection', collection);

apiRoutes.get('/',function(req,res){
    res.send('api homepage');
});

module.exports = apiRoutes;