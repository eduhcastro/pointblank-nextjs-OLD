//########## CONEXAO  ######\\
const { Pool } = require('pg');
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database : 'Evo3',
  password : '123456'});

  module.exports = pool;
//#      06/11/2020        #\\
