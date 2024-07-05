import _ from 'lodash';
import configuration from './config.js';
import dotenv from 'dotenv'

const env = dotenv.config();

const knexConfig = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'myapp_test',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
        directory: './db/migrations'
    },
    seeds:{
        directory: './db/seeds'
    },
  },
};

export default knexConfig;
