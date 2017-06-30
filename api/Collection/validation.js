const collectionRoutes = require('express').Router();
// const validator = require('validator');

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

collectionRoutes.get('/:id',function(req,res,next){
    req.check('id','Invalid id').isInt({
        allow_leading_zeroes: false
    });

    var errors = req.validationErrors();

    if(errors){
        console.log('Invalid parameter');
        res.json({
            statusCode: 400,
            errors: errors
        });
    }else{
        next();
    }
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