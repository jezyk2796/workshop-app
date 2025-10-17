import * as z from "zod";

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: "Minimum length is 3" })
      .max(15, { message: "Maximum length is 15" }),
    lastName: z
      .string()
      .min(3, { message: "Minimum length is 3" })
      .max(15, { message: "Maximum length is 15" }),
    email: z.email(),
    password: z
      .string()
      .min(5, { message: "Minimum length is 5" })
      .max(15, { message: "Maximum length is 15" }),
    retypedPassword: z
      .string()
      .min(5, { message: "Minimum length is 5" })
      .max(15, { message: "Maximum length is 15" }),
  })
  .refine((data) => data.password === data.retypedPassword, {
    message: "The passwords do not match",
    path: ["retypedPassword"],
  });

export type SignUpInputType = z.infer<typeof signUpSchema>;
