import { Router } from "express";
import { allUsers, userById } from "../controllers/users/read.js";
import { register, registerMany } from "../controllers/users/register.js";
import { updateUser } from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";
import validator from "../middlewares/validator.js";
import schema from "../schemas/user.js";

const router = Router()

router.get('/all', allUsers)
router.get('/id/:id', userById)

router.post('/register', validator(schema), register)
router.post('/registermany/', registerMany)

router.put('/update/:id', validator(schema), updateUser)

router.delete('/delete/:id', deleteUser)

export default router