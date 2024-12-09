import { Router } from "express";
import controller from "../controllers/donate/create.js";
import passport from "../middlewares/passport.js";

const { create } = controller;
const router = Router()

router.post('/', passport.authenticate('jwt', { session: false }), create)

export default router