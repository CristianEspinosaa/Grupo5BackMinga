import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import signInGoogle from "../controllers/auth/signInGoogle.js";
import signOut from "../controllers/auth/signOut.js";
import accountNotExists from "../middlewares/accountNotExists.js";
import validatePassword from "../middlewares/validatePassword.js";
import generateToken from "../middlewares/generateToken.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import createHash from "../middlewares/createHash.js";

const routerAuth = Router();

routerAuth.post('/signin', accountNotExists, validatePassword, generateToken, signIn);
routerAuth.post('/signout', passport.authenticate('jwt', { session: false }), signOut);
routerAuth.get('/signin/google', passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] }));
routerAuth.get('/signin/google/callback', passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }), generateToken, signInGoogle);

export default routerAuth;