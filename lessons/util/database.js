const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost.io',
    user: 'root',
    database: 'testDB',
    password: 'Root1234_'
});

module.exports = pool.promise();