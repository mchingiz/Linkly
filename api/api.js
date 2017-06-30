const apiRoutes = require('express').Router();
const collection = require('./Collection/collection.js');

apiRoutes.use('/collection', collection);

apiRoutes.get('/',function(req,res){
    res.send('api homepage');
});

module.exports = apiRoutes;