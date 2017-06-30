const collectionRoutes = require('express').Router();
const db = require('./db.js');

collectionRoutes.get('/',function(req,res){
    res.send('collection homepage');
});

collectionRoutes.get('/test',function(req,res){
    db.query('SELECT * FROM collection',function(err,results,fields){
        console.log(results);
    });

    console.log('done');

    res.send("ok");
});

// Create new collection
collectionRoutes.post('/',function(req,res){
    res.send('create new collection');
});

// Get collection by id
collectionRoutes.get('/:id',function(req,res){
    res.send('get collection of id '+req.params.id);
});

// Update collection by id
collectionRoutes.put('/:id',function(req,res){
    res.send('update collection of id '+req.params.id);
});

// Delete collection by id
collectionRoutes.delete('/:id',function(req,res){
    res.send('delete collection of id '+req.params.id);
});


module.exports = collectionRoutes;