import { Router } from "express";
import { newUser } from "../controllers/userControllers.js";

const userRoutes = Router();

userRoutes.route('/')
    .post(newUser)

export default userRoutes;