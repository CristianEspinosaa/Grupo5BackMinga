import { Router } from "express";
import { allUsers, userById } from "../controllers/users/read.js";
import { register, registerMany } from "../controllers/users/register.js";
import { updateUser } from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";

const router = Router()

router.get('/all', allUsers)
router.get('/id/:id', userById)

router.post('/register', register)
router.post('/registermany/', registerMany)

router.put('/update/:id', updateUser)

router.delete('/delete/:id', deleteUser)

export default router