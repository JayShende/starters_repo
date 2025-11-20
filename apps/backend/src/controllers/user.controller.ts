import { Request, Response } from "express";
import HttpStatus from "http-status";
import { response } from "../utils/responses";
import ApiError from "../utils/api-error";
import userService from "../services/user.service";

const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    console.log("email", email);
    const result = await userService.getUserByEmail(email as string);
    return response(res, HttpStatus.OK, "User found successfully", result);
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
export default { getUserByEmail };
