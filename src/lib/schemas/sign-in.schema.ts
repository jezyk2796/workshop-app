import * as z from "zod";

export const signInSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(5, { message: "Minimum length is 5" })
    .max(15, { message: "Maximum length is 15" }),
  rememberUser: z.boolean(),
});

export type SignInInputType = z.infer<typeof signInSchema>;
