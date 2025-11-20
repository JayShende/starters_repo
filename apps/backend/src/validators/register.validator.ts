import { z } from "zod";

const register = z.object({
  body: z.object({
    name: z.string().min(1, "Name Should Have Minimum One Character"),
    email: z.string().max(100).email(),
    password: z
      .string()
      .min(8)
      .max(20)
      .refine(
        function (password) {
          return /[a-z]/.test(password);
        },
        {
          message: "Password Must Contain atleast one Lowercase Letter",
        }
      )
      .refine(
        function (password) {
          return /[A-Z]/.test(password);
        },
        {
          message: "Password Must Contain At Least One Uppercase Letter",
        }
      )
      .refine(
        function (password) {
          return /[0-9]/.test(password);
        },
        {
          message: "Password Must Contain Atleast a Single Number",
        }
      )
      .refine(
        function (password) {
          return /[\W_]/.test(password);
        },
        {
          message: "Password Must Contain Atleast one Special Character",
        }
      ),
  }),
});
export default {register};