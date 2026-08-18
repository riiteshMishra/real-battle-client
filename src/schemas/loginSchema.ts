import { z } from "zod";

// LOGIN SCHEMA
export const LOGIN_SCHEMA = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain uppercase letter")
    .regex(/[0-9]/, "Password must contain a number"),
  rememberMe: z.boolean().default(false),
});
