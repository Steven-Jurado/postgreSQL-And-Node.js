const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    password: '1234',
    database: 'Tiendita'
})

module.exports = pool;