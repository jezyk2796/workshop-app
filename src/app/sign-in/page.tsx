"use client";
import type { Metadata } from "next";
import NextLink from "next/link";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link as MUILink,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import * as styles from "./sign-in.styles";
import { useForm } from "react-hook-form";
import { SignInInputType, signInSchema } from "@/lib/schemas/sign-in.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { axiosClient } from "@/lib/api/axios";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = () => {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<SignInInputType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberUser: false,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: SignInInputType) => {
      const response = await axiosClient.post("/auth/sign-in", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Logged in ;) Welcome!");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    },
    onError: (error) => {
      const err = error as AxiosError<{ error: string }>;
      const message = err.response?.data?.error || "Invalid email or password";
      toast.error(message);
    },
  });

  const onSubmit = (data: SignInInputType) => mutate(data);

  return (
    <Box sx={styles.signInBox}>
      <Paper sx={styles.signInContainer}>
        <Typography variant="h1" sx={{ mb: 1 }}>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={styles.formContainer}>
            <TextField
              placeholder="Email *"
              variant="standard"
              sx={styles.signInTextField}
              helperText={formState.errors.email?.message?.toString()}
              error={formState.errors.email && true}
              {...register("email")}
            />
            <TextField
              placeholder="Password *"
              type="password"
              variant="standard"
              sx={styles.signInTextField}
              helperText={formState.errors.password?.message?.toString()}
              error={formState.errors.password && true}
              {...register("password")}
            />
            <FormControlLabel
              control={<Checkbox sx={styles.signInCheckbox} {...register("rememberUser")} />}
              label="Remember me"
              sx={{ mt: 1 }}
            />
            <Box sx={{ display: "flex" }}>
              <Button type="submit" variant="contained" sx={{ mt: 2 }} disabled={isPending}>
                Sign in
              </Button>
            </Box>
            <Typography variant="caption" sx={{ mt: 2 }}>
              Don&apos;t have an account?
              <MUILink component={NextLink} href="/sign-up" underline="none">
                &nbsp;Click here to create one
              </MUILink>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default SignInPage;
