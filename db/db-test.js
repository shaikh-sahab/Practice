import config from '../config.js';
import knexConfig from '../knexfile.js';
import knex from 'knex';

let db;

try {

  db = knex(knexConfig[config.nodeEnv]);

} catch (error) {
  
  console.error(`Error -> Database -> Knex, ${error.message}`);

}

export default db;

// const testConnection = async () => {

// try {

//    select query

//   await db('users').select('*').then(user => {

//     console.log(user);

//   });



//    update query

//    await db('users').where({ id: 1 }).update({ name: 'Zayan ali khan' }).then(user => {

//      console.log('User_updated');

//    });



//    insert query

//    await db('users').insert({ name: 'Owais Khan', email: 'owaiskhan@gmail.com' }).then(id => {

//      console.log('Inserted user with ID:', id);

//    });   

//    await db('users').insert({ name: 'QBS', email: 'QBS@gmail.com' }).then(id => {

//      console.log('Inserted user with ID:', id);

//    });



//    delete query

//    await db('users').where({ id: 5 }).del().then(() => {

//      console.log('User Deleted');

//    })

// } catch (err) {

//   console.error('Database connection failed:', err);

// }

// };

// testConnection();