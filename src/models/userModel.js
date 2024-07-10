import BaseModel from '../baseModel.js';

class UserModel extends BaseModel {

  constructor() {

    super('users'); 

  }
  
}

export default new UserModel();
