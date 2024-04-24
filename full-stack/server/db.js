const { Pool } = require("pg")

const pool = new Pool({
    user: 'test_user',
    host: 'localhost',
    database: 'test',
    password: '1234',
    port: 5432
})

module.exports = pool