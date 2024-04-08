import express from "express";
import { tryCatch } from "../middlewares/tryCatch";
import { simpleNodeMailer } from "../controllers/userController";
export const router = express.Router();

router.route("/simplemail").post(tryCatch(simpleNodeMailer))