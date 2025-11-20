import { client } from "@repo/prisma/client";
import httpStatus from "http-status";
import ApiError from "../utils/api-error";
import bcrypt from "bcryptjs";

const getUserByEmail = async (email: string) => {
  const user = await client.user.findUnique({
    where: { email },
  });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  return user;
};

export default { getUserByEmail };
