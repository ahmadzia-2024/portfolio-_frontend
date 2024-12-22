import { z } from "zod";

export const signUpSchema = z
  .object({
    fullname: z.string().min(2, "Full name Must be Grater Than Two letters"),
    email: z.string().email(),
    password: z.string().min(10, "Password must be at least 10 characters"),
    confirmPassword: z.string(),
    photo: z.string().url().optional(),
    oldPhoto: z.string().url().optional(),
    refreshToken: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
