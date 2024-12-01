import { Router } from "express";
import userRouter from './users.js';
import authorRouter from './authors.js';
import companyRouter from './companies.js';
import categoryRouter from './categories.js';
import mangaRouter from './mangas.js';

const router = Router();

router.use('/users', userRouter);
router.use('/authors', authorRouter);
router.use('/companies', companyRouter);
router.use('/categories', categoryRouter);
router.use('/mangas', mangaRouter);

export default router;