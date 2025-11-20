// import { client } from "@repo/prisma/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const getUserByEmail = async (email: string) => {
//   try {
//     const user = await client.user.findUnique({
//       where: {
//         email: email,
//       },
//     });
//     return user;
//   } catch {
//     return null;
//   }
// };

// export const getUserById = async (id: string) => {
//   try {
//     const user = await client.user.findUnique({
//       where: {
//         id: id,
//       },
//     });

//     return user;
//   } catch {
//     return null;
//   }
// };
