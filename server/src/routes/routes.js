import { Router } from "express";
import pollRoutes from "./pollRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = Router();

routes.use('/poll', pollRoutes);
routes.use('/user', userRoutes)

export default routes;