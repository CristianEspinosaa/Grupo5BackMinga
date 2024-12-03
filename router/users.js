import { Router } from "express";
import { allUsers, userById } from "../controllers/users/read.js";
import { register, registerMany } from "../controllers/users/register.js";
import { updateUser } from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";
import passport from "../middlewares/passport.js";
import { validator } from "../middlewares/validator.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import generateToken from "../middlewares/generateToken.js";
import isAuthorized from "../middlewares/isAuthorized.js";
import schema from "../schemas/user.js";

const router = Router()

router.get('/all', passport.authenticate('jwt', { session: false }), allUsers)
router.get('/id/:id', passport.authenticate('jwt', { session: false }), isAuthorized, userById);

router.post('/register', validator(schema), accountExists, createHash, generateToken, register)

router.put('/update/:id', passport.authenticate('jwt', { session: false }), isAuthorized, validator(schema), updateUser);

router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), isAuthorized, deleteUser);

export default router