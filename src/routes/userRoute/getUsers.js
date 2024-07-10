import express from 'express';
import userRoutes from './index.js';

const router = express.Router();

router.use('/users', userRoutes);

export default router;
