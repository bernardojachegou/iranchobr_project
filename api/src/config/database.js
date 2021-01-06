const { Pool } = require('pg');

const client = new Pool({
  user: 'postgres',
  password: 'defcon4',
  host: 'localhost',
  port: '5432',
  database: 'iranchobr',
});

module.exports = client;
