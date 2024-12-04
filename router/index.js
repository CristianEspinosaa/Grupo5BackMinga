import { Router } from "express";
import adminRouter from './admin.js'; 
import userRouter from './users.js';
import authorRouter from './authors.js';
import companyRouter from './companies.js';
import categoryRouter from './categories.js';
import mangaRouter from './mangas.js';
import chapterRouter from './chapters.js';
import commentRouter from './comments.js';
import reactionRouter from "./reactions.js";
import authRouter from "./auth.js";

const router = Router();

router.use('/auth', authRouter);
router.use('/dashboard', adminRouter);
router.use('/users', userRouter);
router.use('/authors', authorRouter);
router.use('/companies', companyRouter);
router.use('/categories', categoryRouter);
router.use('/mangas', mangaRouter);
router.use('/chapters', chapterRouter);
router.use('/comments', commentRouter);
router.use('/reactions', reactionRouter);

export default router;