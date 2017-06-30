//  api/api.js

var collection = require('./Collection/collection.js');

module.exports = {
    getConnection: function(mysql){
        var connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });

        connection.connect();

        return connection;
    },
    collection: collection
};