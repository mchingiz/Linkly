const mysql = require('mysql');

const db = {
    connection: null,
    connect: function(){
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

            console.log('connected');
            this.connection = connection;
            return connection;
        });
    },
    disconnect: function(){
        this.connection.end();
    }
};

module.exports = db;