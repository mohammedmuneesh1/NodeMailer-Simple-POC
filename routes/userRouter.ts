import express from "express";
import { tryCatch } from "../middlewares/tryCatch";
import { simpleNodeMailer } from "../controllers/userController";
import { joiValidation } from "../middlewares/joiValidateMiddleware";
import { gmailValidate } from "../validation/joiValidation";
export const router = express.Router();

router.route("/simplemail").post(joiValidation(gmailValidate),tryCatch(simpleNodeMailer))