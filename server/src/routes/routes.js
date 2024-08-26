import { Router } from "express";
import pollRoutes from "./pollRoutes.js";

const routes = Router();

routes.use('/poll', pollRoutes);

export default routes;