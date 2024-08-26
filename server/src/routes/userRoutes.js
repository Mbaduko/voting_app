import { Router } from "express";
import { login, newUser } from "../controllers/userControllers.js";

const userRoutes = Router();

userRoutes.route('/')
    .post(newUser)

userRoutes.route('/login')
    .post(login)

export default userRoutes;