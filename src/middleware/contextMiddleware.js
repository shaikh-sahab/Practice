import UserModel from '../models/userModel.js';
import db from '../../db/db-test.js';
import internalError from './errorsmiddleware/internalError.js';

async function contextMiddleware(req, res, next) {

  try {

    console.log('Middleware execution started');

    console.log('Time:', new Date().toISOString());

    console.log({ url: req.url, method: req.method });

    req.context = {

      userModel: UserModel

    };

    console.log('userModel:', req.context.userModel);

    console.log('Middleware execution finished');

    next();

  } catch (error) {

    console.error(`Error -> contextMiddleware, ${error.message}`);

    return internalError(error, req, res)

  }

}

export default contextMiddleware;
