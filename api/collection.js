var collectionRoutes = require('express').Router();

collectionRoutes.get('/',function(req,res){
    res.send('collection homepage');
});

collectionRoutes.post('/',function(req,res){
    res.send('create new collection');
});

collectionRoutes.get('/:id',function(req,res){
    res.send('get collection of id '+req.params.id);
});

collectionRoutes.put('/:id',function(req,res){
    res.send('update collection of id '+req.params.id);
});

collectionRoutes.delete('/:id',function(req,res){
    res.send('delete collection of id '+req.params.id);
});


module.exports = collectionRoutes;