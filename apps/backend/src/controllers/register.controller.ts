import { Request, Response } from "express";
import HttpStatus from "http-status";
import registerService from "../services/register.service";
import { response } from "../utils/responses";
import ApiError from "../utils/api-error";

const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const result = await registerService.register({ name, email, password });
    return response(
      res,
      HttpStatus.CREATED,
      "User created successfully",
      result
    );
  } catch (error) {
    if (error instanceof ApiError) {
      return response(res, error.statusCode, error.message);
    }
    return response(
      res,
      HttpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};
export default {
  register,
};
