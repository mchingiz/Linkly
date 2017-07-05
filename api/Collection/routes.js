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
    console.log('[EXPRESS] Create collection / name: '+req.body.name + ' / id: ' + req.body.user_id);

    req.setEncoding('utf8');

    var queryString = "INSERT INTO collection (name,user_id) VALUES (?,?)";
    var queryData = [req.body.name,req.body.user_id];

    query(queryString,queryData,function(err,results,fields){
        if(err){
            res.status(500).json({
                errors: ["Collection couldn't be created. Internal server error."],
            })
        }else{
            console.log('[MYSQL] Affected rows: '+results.affectedRows);

            res.status(201).json({
                message: "Collection has been created successfully",
            });
        }
    });
});

// --------------------------
// ----- GET COLLECTION -----
// --------------------------

collectionRoutes.get('/:id',function(req,res){
    console.log('[EXPRESS] Get collection / id: ' + req.params.id);

    const queryString = "SELECT * FROM collection WHERE id=?";
    const queryData = [req.params.id];

    query(queryString,queryData,function(err,results,fields){

        console.log(results);
        if(err){
            console.log(err);
            res.status(500).json({
                errors: ["Couldn't get collection. Internal server error."]
            })
        }
        else if(results.length == 0){
            res.status(404).json({
                errors: ["Collection is not found."],
            })
        }
        else{
            res.status(200).json(results);
        }
    });

});

// -----------------------------
// ----- UPDATE COLLECTION -----
// -----------------------------

collectionRoutes.put('/:id',function(req,res){
    console.log('[EXPRESS] Update collection / name: '+req.body.name + ' / id: ' + req.params.id);

    const stringQuery = "UPDATE collection SET name=? WHERE id=?";
    const stringData = [req.body.name,req.params.id];

    query(stringQuery,stringData,function(err,results,fields){
            console.log(results);
            // console.log('[MYSQL] Affected rows: '+results.affectedRows);
            if(err){
                console.log(err);
                res.status(500).json({
                    errors: ["Couldn't get collection. Internal server error."]
                })
            }
            else if(results.affectedRows == 0){
                res.status(404).json({
                    errors: ["Collection is not found."],
                })
            }
            else{
                res.status(200).json({
                    message: "Collection has been updated successfully",
                });
            }
        });
});


// -----------------------------
// ----- DELETE COLLECTION -----
// -----------------------------

collectionRoutes.delete('/:id',function(req,res){
    console.log('[EXPRESS] Delete collection / id: ' + req.params.id);

    const stringQuery = "DELETE FROM collection WHERE id=?";
    const stringData = [req.params.id];

    query(stringQuery,stringData,function(err,results,fields){
            console.log(results);
            // console.log('[MYSQL] Affected rows: '+results.affectedRows);
            if(err){
                console.log(err);
                res.status(500).json({
                    errors: ["Couldn't get collection. Internal server error."]
                })
            }
            else if(results.affectedRows == 0){
                res.status(404).json({
                    errors: ["Collection is not found."],
                })
            }
            else{
                res.status(200).json({
                    message: "Collection has been deleted successfully",
                });
            }
        });
});

module.exports = collectionRoutes;