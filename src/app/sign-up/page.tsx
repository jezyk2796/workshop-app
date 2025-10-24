"use client";
import type { Metadata } from "next";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { Box, Button, Link as MUILink, Paper, TextField, Typography } from "@mui/material";
import * as styles from "./sign-up.styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpInputType } from "@/lib/schemas/sign-up.schema";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { axiosClient } from "@/lib/api/axios";
import type { AxiosError } from "axios";

const metadata: Metadata = {
  title: "Sign Up",
};

const SignUpPage = () => {
  const { register, handleSubmit, formState, reset } = useForm<SignUpInputType>({
    resolver: zodResolver(signUpSchema),
  });

  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: SignUpInputType) => {
      const response = await axiosClient.post("/auth/sign-up", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Account created successfully! You can now log in.");
      reset();

      setTimeout(() => {
        router.push("/sign-in");
      }, 1500);
    },
    onError: (error) => {
      const err = error as AxiosError<{ error: string }>;
      const message = err.response?.data?.error || "Server error. Please try again later.";
      toast.error(message);
    },
  });

  const onSubmit = (data: SignUpInputType) => mutate(data);

  return (
    <Box sx={styles.signUpBox}>
      <Paper sx={styles.signUPContainer}>
        <Typography variant="h1" sx={{ mb: 1 }}>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={styles.signUpFormContainer}>
            <TextField
              placeholder="First Name *"
              variant="standard"
              sx={styles.signUpTextField}
              helperText={formState.errors.firstName?.message?.toString()}
              error={formState.errors.firstName && true}
              {...register("firstName")}
            />
            <TextField
              placeholder="Last Name *"
              variant="standard"
              sx={styles.signUpTextField}
              helperText={formState.errors.lastName?.message?.toString()}
              error={formState.errors.lastName && true}
              {...register("lastName")}
            />
            <TextField
              placeholder="Email *"
              variant="standard"
              sx={styles.signUpTextField}
              helperText={formState.errors.email?.message?.toString()}
              error={formState.errors.email && true}
              {...register("email")}
            />
            <TextField
              placeholder="Password *"
              type="password"
              variant="standard"
              sx={styles.signUpTextField}
              helperText={formState.errors.password?.message?.toString()}
              error={formState.errors.password && true}
              {...register("password")}
            />
            <TextField
              placeholder="Retype Password *"
              type="password"
              variant="standard"
              sx={styles.signUpTextField}
              helperText={formState.errors.retypedPassword?.message?.toString()}
              error={formState.errors.retypedPassword && true}
              {...register("retypedPassword")}
            />
            <Box sx={{ display: "flex" }}>
              <Button type="submit" variant="contained" disabled={isPending} sx={{ mt: 5 }}>
                Sign Up
              </Button>
            </Box>
            <Typography variant="caption" sx={{ mt: 2 }}>
              Already have an account? Then
              <MUILink component={NextLink} href="/sign-in" underline="none">
                &nbsp;Sign In
              </MUILink>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default SignUpPage;
