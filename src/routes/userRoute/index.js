import express from 'express';
import getAllUsers from './getAllUsers.js';
import getUserById from './getUserById.js';
import createUser from './createUser.js';
import updateUser from './updateUser.js';
import deleteUser from './deleteUser.js';

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;
