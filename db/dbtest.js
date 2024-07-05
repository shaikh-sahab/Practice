import config from '../config.js';
import knexConfig from '../knexfile.js';
import knex from 'knex';

let database;

try {
  database = knex(knexConfig[config.nodeEnv]);
} catch (error) {
  console.error(`Error -> Database -> Knex, ${error.message}`);
}

export default database;


  
