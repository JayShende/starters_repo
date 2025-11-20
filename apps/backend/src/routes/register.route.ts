import express, { Router } from "express";
import registerController from "../controllers/register.controller";
import { validate } from "../middlewares/validate";
import registerValidator from "../validators/register.validator";

const router: Router = express.Router();
router.post(
  "/addUser",
  validate(registerValidator.register),
  registerController.register
);

export default router;
