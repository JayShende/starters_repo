"use server";
import { client } from "@repo/prisma/client";

export const getUserByEmail = async (email: string) => {
  console.log("inside this function");
  try {
    const user = await client.user.findUnique({
      where: { email },
    });
    return user;
  } catch {
    console.log("error in this function");
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await client.user.findUnique({
      where: { id },
    });
    return user;
  } catch {
    return null;
  }
};
