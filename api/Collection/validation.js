const collectionRoutes = require('express').Router();

// --------------
// ---- TEST ----
// --------------

// collectionRoutes.get('/test',function(req,res,next){
//     next();
// });

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

    console.log('validating get collection');
    req.check('id','Invalid id')
        .isInt({
            allow_leading_zeroes: false
        }).withMessage('Id should be an integer without leading zeros');

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

collectionRoutes.put('/:id',function(req,res,next){
    req.check('id','Invalid id')
        .isInt({
            allow_leading_zeros: false
        }).withMessage('Id should be an integer withour leading zeros');
    req.check('name','Invalid name')
        .isLength({
            min: 3,
            max: undefined
        }).withMessage('Name should be at least 3 characters long');

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
// ----- DELETE COLLECTION -----
// -----------------------------

collectionRoutes.delete('/:id',function(req,res){
    res.send('delete collection of id '+req.params.id);
});

module.exports = collectionRoutes;