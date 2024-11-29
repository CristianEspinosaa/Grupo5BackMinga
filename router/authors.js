import { Router } from "express";
import { allAuthors, authorById } from "../controllers/authors/read.js";
import { register, registerMany } from "../controllers/authors/register.js";
import { updateAuthor } from "../controllers/authors/update.js";
import { deleteAuthor } from "../controllers/authors/delete.js";

const router = Router()

router.get('/all', allAuthors)
router.get('/id/:id', authorById)

router.post('/register', register)
router.post('/registermany/', registerMany)

router.put('/update/:id', updateAuthor)

router.delete('/delete/:id', deleteAuthor)

export default router