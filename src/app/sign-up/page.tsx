"use client";
import type { Metadata } from "next";
import NextLink from "next/link";
import { Box, Button, Link as MUILink, Paper, TextField, Typography } from "@mui/material";
import * as styles from "./sign-up.styles";

const metadata: Metadata = {
  title: "Sign Up",
};

const SignUpPage = () => {
  return (
    <Box sx={styles.signUpBox}>
      <Paper sx={styles.signUPContainer}>
        <Typography variant="h1" sx={styles.signUpHeader}>
          Sign Up
        </Typography>
        <form>
          <Box sx={styles.signUpFormContainer}>
            <TextField placeholder="First Name *" variant="standard" sx={styles.signUpTextField} />
            <TextField placeholder="Last Name *" variant="standard" sx={styles.signUpTextField} />
            <TextField placeholder="Email *" variant="standard" sx={styles.signUpTextField} />
            <TextField
              placeholder="Password *"
              type="password"
              variant="standard"
              sx={styles.signUpTextField}
            />
            <TextField
              placeholder="Retype Password *"
              type="password"
              variant="standard"
              sx={styles.signUpTextField}
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
