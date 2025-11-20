import express, { Router } from "express";
import userController from "../controllers/user.controller";
import { validate } from "../middlewares/validate";
import userValidator from "../validators/user.validator";

const router: Router = express.Router();

router.get(
  "/getUserByEmail/:email",
  // validate(userValidator.userValidator),
  userController.getUserByEmail
);
export default router;
