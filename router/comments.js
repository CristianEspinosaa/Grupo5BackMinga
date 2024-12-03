import { Router } from "express";
import { create, createMany } from "../controllers/comments/create.js";
import { allComments, commentByChapterId, commentById } from "../controllers/comments/read.js";
import { updateComment } from "../controllers/comments/update.js";
import { deleteComment } from "../controllers/comments/delete.js";
import { validator, validatorParams } from "../middlewares/validator.js";
import schema from "../schemas/comment.js";

const router = Router();

router.get('/all', allComments);
router.get('/byChapter/:chapterId', commentByChapterId);
router.get('/id/:id', commentById);

router.post('/create', validator(schema), create);
router.post('/createMany', createMany);

router.put('/update/:id', validator(schema), updateComment);

router.delete('/delete/:id', deleteComment);

export default router;