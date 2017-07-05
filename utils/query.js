const mysql = require('mysql');

const query = function query(sql,values,callback){
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

    connection.query(sql,values,function(err,results,fields){
        if(err){
            console.log('[MYSQL] Couldn\'t query the db');
        }

        callback(err,results,fields);

        connection.end();
    });
};

module.exports = query;

