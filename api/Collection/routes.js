const collectionRoutes = require('express').Router();
const Collection = require('../../db/Models/collection.js');


// ------------------
// ---- HOMEPAGE ----
// ------------------

collectionRoutes.get('/',function(req,res){
    const db = req.db;

    Collection.find({},{},function(err,collections){
        if(err) throw err;

        console.log(collections);
        res.status(200).json(collections);
    })
});

// --------------
// ---- TEST ----
// --------------

collectionRoutes.get('/test',function(req,res){
    const db = req.db;

    var obj = new Collection({
        name: 'a collection',
        user_id: 4,
        links: [
            {
                name: "firstLink",
                url: "firstURL"
            },{
                name: "secondLink",
                url: "secondURL"
            }
        ]
    });

    obj.save(function(err){
        if(err) throw err;

        res.sendStatus(200);
    });
});

// --------------------------
// ----- NEW COLLECTION -----
// --------------------------

collectionRoutes.post('/',function(req,res){
    res.sendStatus(200);
});

// --------------------------
// ----- GET COLLECTION -----
// --------------------------

collectionRoutes.get('/:id',function(req,res){
    res.sendStatus(200);
});

// -----------------------------
// ----- UPDATE COLLECTION -----
// -----------------------------

collectionRoutes.put('/:id',function(req,res){
    res.sendStatus(200);
});


// -----------------------------
// ----- DELETE COLLECTION -----
// -----------------------------

collectionRoutes.delete('/:id',function(req,res){
    res.sendStatus(200);
});

module.exports = collectionRoutes;