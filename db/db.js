const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    password: 'm00nlex',
    host: 'localhost',
    port: 5432,
    database: 'TAGS'
});

module.exports = pool;