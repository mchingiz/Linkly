const collectionValidations = require('express').Router();

// --------------
// ---- TEST ----
// --------------

collectionValidations.post('/test',function(req,res,next){
    console.log('Validating test...');
    next('route');
});

// --------------------------
// ----- NEW COLLECTION -----
// --------------------------

collectionValidations.post('/:id',function(req,res,next){
    console.log('validating post collection...');

    req.check('name','Invalid name')
        .isLength({
            min: 3,
            max: undefined
        }).withMessage('Name should be at least 3 characters long');

    var errors = req.validationErrors();

    if(errors){
        console.log('Invalid parameter');

        res.status(400).json({
            errors: errors
        });
    }else{
        next();
    }
});

// --------------------------
// ----- GET COLLECTION -----
// --------------------------

collectionValidations.get('/:id(\\d+)',function(req,res,next){
    console.log('validating get collection...');

    req.check('id','Invalid id')
        .isInt({
            allow_leading_zeroes: false
        }).withMessage('Id should be an integer without leading zeros');

    var errors = req.validationErrors();

    if(errors){
        console.log('Invalid parameter');

        res.status(400).json({
            errors: errors,
        });
    }else{
        next();
    }
});

// -----------------------------
// ----- UPDATE COLLECTION -----
// -----------------------------

collectionValidations.put('/:id',function(req,res,next){
    console.log('validating put collection...');

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

        res.status(400).json({
            errors: errors
        });
    }else{
        next();
    }
});


// -----------------------------
// ----- DELETE COLLECTION -----
// -----------------------------

collectionValidations.delete('/:id',function(req,res,next){
    console.log('validating delete collection...');

    req.check('id','Invalid id')
        .isInt({
            allow_leading_zeros: false
        }).withMessage('Id should be an integer withour leading zeros');

    var errors = req.validationErrors();

    if(errors){
        console.log('Invalid parameter');

        res.status(400).json({
            errors: errors
        });
    }else{
        next();
    }
});

module.exports = collectionValidations;