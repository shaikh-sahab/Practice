import db from "../db/db-test.js";

class BaseModel {

  constructor(tableName) {

    this.tableName = tableName;

  }

  findAll() {

    return db(this.tableName).select('*');

  }

  findById(id) {

    return db(this.tableName).where({ id: 1 });

  }
  
}

export default BaseModel;
