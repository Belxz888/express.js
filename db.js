const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'a1234dfc',
  port: 5432,
});

module.exports = pool
