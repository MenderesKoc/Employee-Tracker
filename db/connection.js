const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root61',
    database: 'employee'
});

module.exports = db;