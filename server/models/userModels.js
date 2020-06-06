cosnt { pool } = require('pg');

const PG_URI = 

const pool = new Pool ({
    connectionString: PG_URI
})

module.exports = {
    query: (text, params, callback) =>
}