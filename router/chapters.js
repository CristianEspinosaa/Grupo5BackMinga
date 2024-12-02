import { Router } from "express";
import { create, createMany } from "../controllers/chapters/create.js";
import { allChapters, chapterByMangaId, chapterById } from "../controllers/chapters/read.js";
import { updateChapter } from "../controllers/chapters/update.js";
import { deleteChapter } from "../controllers/chapters/delete.js";
import validator from "../middlewares/validator.js";
import schema from "../schemas/chapter.js";

const router = Router()

router.get('/all', allChapters)
router.get('/byManga/:id', chapterByMangaId)
router.get('/id/:id', chapterById)

router.post('/create', validator(schema), create)
router.post('/createMany/', createMany)

router.put('/update/:id', validator(schema), updateChapter)

router.delete('/delete/:id', deleteChapter)

export default router