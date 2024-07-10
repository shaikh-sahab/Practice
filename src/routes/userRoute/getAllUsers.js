import express from 'express'
import userModel from '../../models/userModel.js';
import internalError from '../../middleware/errorsmiddleware/internalError.js';
const router = express.Router();

router.get('/', async (req, res) => {

  try {

    const users = await userModel.findAll();

    res.json(users);

  } catch (error) {

    return internalError(error, req, res)

  }

});
  
export default router;
