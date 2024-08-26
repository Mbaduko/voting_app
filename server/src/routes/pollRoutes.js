import { Router } from "express";
import { newPoll } from "../controllers/pollController.js";
import authorization from "../middlewares/authorization.js";

const pollRoutes = Router();

pollRoutes.route("/")
    .post(authorization, newPoll)


export default pollRoutes;