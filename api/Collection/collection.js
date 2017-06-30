const collectionRoutes = require('express').Router();
const query = require('../query.js');

// ------------------
// ---- HOMEPAGE ----
// ------------------

collectionRoutes.get('/',function(req,res){
    res.send('collection homepage');
});

// --------------
// ---- TEST ----
// --------------

collectionRoutes.get('/test',function(req,res){
    query('SELECT * FROM collection',[],function(results,fields){
        console.log(results);
        res.send(results);
    });
});

// --------------------------
// ----- NEW COLLECTION -----
// --------------------------

collectionRoutes.post('/',function(req,res){
    res.send('create new collection');
});

// --------------------------
// ----- GET COLLECTION -----
// --------------------------

collectionRoutes.get('/:id',function(req,res){

    query('SELECT * FROM collection WHERE id=?',[req.params.id],function(results,fields){
        console.log(results);
        res.send(results);
    });

});

// -----------------------------
// ----- UPDATE COLLECTION -----
// -----------------------------

collectionRoutes.put('/:id',function(req,res){
    res.send('update collection of id '+req.params.id);
});


// -----------------------------
// ----- DELETE COLLECTION -----
// -----------------------------

collectionRoutes.delete('/:id',function(req,res){
    res.send('delete collection of id '+req.params.id);
});

module.exports = collectionRoutes;