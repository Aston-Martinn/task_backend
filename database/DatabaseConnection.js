const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Kalpavana1@',
    database: 'swiggy'
});

module.exports = pool;