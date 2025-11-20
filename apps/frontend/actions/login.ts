"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";
import { AxiosError } from "axios";

export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
  const result = LoginSchema.safeParse(values);
  if (result.success == false) {
    return { error: "Invalid Inputs" };
  }

  const { email, password } = result.data;
  console.log(email, password);
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    console.log("The Error is", error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something Went Wrong !" };
      }
    } else if (error instanceof AxiosError) {
      return { error: error.response?.data.message };
    }
    throw error;
  }
};
