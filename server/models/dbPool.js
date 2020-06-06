cosnt { pool } = require('pg');
const ('dotenv').config(); 

const PG_URI = `postgres:${process.env.PG_USER}:${process.env.PG_PW}//@ruby.db.elephantsql.com:5432/cwrrcqii`

const pool = new Pool ({
    connectionString: PG_URI
})

module.exports = {
    query: (text, params, callback) =>{
        console.log('executed query', text);
        return pool.query(text,params,callback);
    }
}