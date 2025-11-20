import { client } from "@repo/prisma/client";
import httpStatus from "http-status";
import ApiError from "../utils/api-error";
import bcrypt from "bcryptjs";

interface registerProps {
  name: string;
  email: string;
  password: string;
}

const register = async ({ name, email, password }: registerProps) => {
  //check if email already exists
  const emailExists = await client.user.findUnique({
    where: {
      email,
    },
  });
  if (emailExists) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already exists");
  }
  // proceed to create user
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await client.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  return user;
};
export default { register };
