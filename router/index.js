import { Router } from "express";
import userRouter from './users.js';
import authorRouter from './authors.js';

const router = Router();

router.use('/users', userRouter);
router.use('/authors', authorRouter);

export default router;