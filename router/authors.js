import { Router } from "express";
import { allAuthors, authorById } from "../controllers/authors/read.js";
import { create, createMany } from "../controllers/authors/create.js";
import { updateAuthor } from "../controllers/authors/update.js";
import { deleteAuthor } from "../controllers/authors/delete.js";

const router = Router()

router.get('/all', allAuthors)
router.get('/id/:id', authorById)

router.post('/create', create)
router.post('/createMany/', createMany)

router.put('/update/:id', updateAuthor)

router.delete('/delete/:id', deleteAuthor)

export default router