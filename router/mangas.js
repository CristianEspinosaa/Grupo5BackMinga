import { Router } from "express";
import { create, createMany } from "../controllers/mangas/create.js";
import { allMangas, mangaById, mangaByAuthorId, mangaByCompanyId } from "../controllers/mangas/read.js";
import { updateManga } from "../controllers/mangas/update.js";
import { deleteManga } from "../controllers/mangas/delete.js";
import { validator, validatorParams } from "../middlewares/validator.js";
import schema from "../schemas/manga.js";

const router = Router()

router.get('/all', allMangas)
router.get('/id/:id', mangaById)
router.get('/byAuthor/:id', mangaByAuthorId)
router.get('/byCompany/:id', mangaByCompanyId)

router.post('/create', validator(schema), create)
router.post('/createMany/', createMany)

router.put('/update/:id', validator(schema), updateManga)

router.delete('/delete/:id', deleteManga)

export default router