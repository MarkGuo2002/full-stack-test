const { Pool } = require("pg")

const pool = new Pool({
    user: 'postgres',
    host: '192.168.1.201',
    database: 'postgres',
    password: '1234',
    port: 5432
})

module.exports = pool