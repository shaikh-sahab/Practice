import db from './dbtest.js'

class QueryContext {
  constructor(db) {
    this.db = db;
  }

  getAllUsers() {
    console.log('getAllUsers called');
    return this.db('users').select('*');
  }

  getUserById(id) {
    console.log('getUserById called with id:', id);
    return this.db('users').where({ id }).first();
  }

  createUser(user) {
    console.log('createUser called with user:', user);
    return this.db('users').insert(user);
  }

  updateUser(id, user) {
    console.log('updateUser called with id:', id, 'and user:', user);
    return this.db('users').where({ id }).update(user);
  }

  deleteUser(id) {
    console.log('deleteUser called with id:', id);
    return this.db('users').where({ id }).del();
  }
}

export default new QueryContext(db());
