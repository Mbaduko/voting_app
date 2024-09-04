import { Router } from "express";
import { newPoll, pallot } from "../controllers/pollController.js";
import authorization from "../middlewares/authorization.js";

const pollRoutes = Router();

pollRoutes.route("/")
    .post(authorization, newPoll)
    .patch(pallot);


export default pollRoutes;