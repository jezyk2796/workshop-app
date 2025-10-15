"use client";
import type { Metadata } from "next";
import NextLink from "next/link";
import { Box, Button, Link as MUILink, Paper, TextField, Typography } from "@mui/material";
import * as styles from "./sign-up.styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpInputType } from "@/lib/schemas/sign-up.schema";

const metadata: Metadata = {
  title: "Sign Up",
};

const SignUpPage = () => {
  const { register, handleSubmit, formState } = useForm<SignUpInputType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpInputType) => {
    event?.preventDefault();
    console.log("hello form submitted", data);
  };

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
              <Button type="submit" variant="contained" sx={{ mt: 5 }}>
                Sign Up
              </Button>
            </Box>
            <Typography variant="caption" sx={{ mt: 2 }}>
              Already have an account? Then
              <MUILink component={NextLink} href="/login" underline="none">
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
