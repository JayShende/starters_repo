import { z } from "zod";

const userValidator = z.object({
  body: z.object({
    email: z.string().max(100).email(),
  }),
});
export default { userValidator };
