import z from "zod";
export const userSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  photo: z.string().url().optional(),
  password: z.string().min(8, "Password must be at least 8 characters long"), //
  oldPhoto: z.string().url().optional(),
  refreshToken: z.string().optional(),
});
