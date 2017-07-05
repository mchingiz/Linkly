const mysql = require('mysql');

const transaction = function query(queries,callback){
    var connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });

    connection.connect(function(err){
        if(err){
            console.log('[MYSQL] Couldn\'t connect to db');
            throw err;
        }
    });

    connection.beginTransaction(function(err){
        connection.query(queries.collection.string,[queries.collection.values],function(err,results,fields){
            if(err){
                return connection.rollback(function(){
                    throw err;
                })
            }

            var log = "Collection inserted " + results.insertId + "/n";

            connection.query(queries.links.string,[queries.links.values],function(err,results,fields){
                if(err){
                    return connection.rollback(function(){
                        throw err;
                    })
                }

                connection.commit(function(err){
                    if(err){
                        return connection.rollback(function(){
                            throw err;
                        })
                    }

                    console.log('success');
                    callback(err,results,fields);
                })
            })
        })
    });

    connection.end();
};

module.exports = transaction;

