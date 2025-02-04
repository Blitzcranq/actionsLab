import express from 'express';
import courseRoutes from './courseRoutes.js';

const router = express.Router();

router.use('/courses', courseRoutes);

export default router;