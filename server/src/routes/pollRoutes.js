import { Router } from "express";
import { newPoll } from "../controllers/pollController.js";

const pollRoutes = Router();

pollRoutes.route("/")
    .post(newPoll)


export default pollRoutes;