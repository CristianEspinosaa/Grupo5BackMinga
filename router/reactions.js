import { Router } from "express";
import { create, createMany } from "../controllers/reactions/create.js";
import { allReactions, reactionById, reactionsByMangaId } from "../controllers/reactions/read.js";
import { updateReaction } from "../controllers/reactions/update.js";
import { deleteReaction } from "../controllers/reactions/delete.js";
import { validator, validatorParams } from "../middlewares/validator.js";
import schema from "../schemas/reaction.js";

const router = Router();

router.get('/all', allReactions);
router.get('/id/:id', reactionById);
router.get('/byManga/:mangaId', reactionsByMangaId);

router.post('/create', validator(schema), create);
router.post('/createMany/', createMany);

router.put('/update/:id', validator(schema), updateReaction);

router.delete('/delete/:id', deleteReaction);

export default router;