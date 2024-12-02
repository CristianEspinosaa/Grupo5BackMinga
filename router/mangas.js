import { Router } from "express";
import { create, createMany } from "../controllers/mangas/create.js";
import { allMangas, mangaById, mangaByAuthorId, mangaByCompanyId } from "../controllers/mangas/read.js";
import { updateManga } from "../controllers/mangas/update.js";
import { deleteManga } from "../controllers/mangas/delete.js";

const router = Router()

router.get('/all', allMangas)
router.get('/id/:id', mangaById)
router.get('/byAuthor/:id', mangaByAuthorId)
router.get('/byCompany/:id', mangaByCompanyId)

router.post('/create', create)
router.post('/createMany/', createMany)

router.put('/update/:id', updateManga)

router.delete('/delete/:id', deleteManga)

export default router