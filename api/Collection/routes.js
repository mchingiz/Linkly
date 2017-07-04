const collectionRoutes = require('express').Router();
const query = require('../../utils/query.js');

// ------------------
// ---- HOMEPAGE ----
// ------------------

collectionRoutes.get('/',function(req,res){
    res.send('collection homepage');
});

// --------------
// ---- TEST ----
// --------------

// collectionRoutes.get('/test',function(req,res){
//     console.log('test');
//     res.sendStatus(200);
//     // query('SELECT * FROM collection',[],function(results,fields){
//     //     console.log(results);
//     //     res.send(results);
//     // });
// });

// --------------------------
// ----- NEW COLLECTION -----
// --------------------------

collectionRoutes.post('/',function(req,res){
    console.log('[EXPRESS] Create collection / name: '+req.params.name + ' / id: ' + req.params.id);

    req.setEncoding('utf8');

    query(
        "INSERT INTO collection (name,user_id) VALUES ('?','?')",
        [req.body.name,req.params.user_id],
        function(results,fields){
            console.log('[MYSQL] Affected rows: '+results.affectedRows);

            res.json({
                statusCode: 200,
                message: "Collection has been created successfully"
            });
        });
});

// --------------------------
// ----- GET COLLECTION -----
// --------------------------

collectionRoutes.get('/:id',function(req,res){
    console.log('get by id');
    res.sendStatus(200);

    // query('SELECT * FROM collection WHERE id=?',[req.params.id],function(results,fields){
    //     console.log(results);
    //     res.send(results);
    // });

});

// -----------------------------
// ----- UPDATE COLLECTION -----
// -----------------------------

collectionRoutes.put('/:id',function(req,res){
    console.log('[EXPRESS] Update collection / name: '+req.params.name + ' / id: ' + req.params.id);
    //
    // res.sendStatus(200);

    query(
        "UPDATE collection SET name=? WHERE id=?",
        [req.body.name,req.params.id],
        function(results,fields){
            console.log('[MYSQL] Affected rows: '+results.affectedRows);

            res.json({
                statusCode: 200,
                message: "Collection has been updated successfully"
            });
        });
});


// -----------------------------
// ----- DELETE COLLECTION -----
// -----------------------------

collectionRoutes.delete('/:id',function(req,res){
    res.send('delete collection of id '+req.params.id);
});

module.exports = collectionRoutes;