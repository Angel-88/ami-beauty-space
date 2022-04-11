const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    password: '1234567890',
    host: 'localhost',
    port: 5432,
    database: "AMI_Beauty_Space"
});


module.exports = pool;
