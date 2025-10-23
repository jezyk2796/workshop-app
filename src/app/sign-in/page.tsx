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

const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = () => {
  return (
    <Box sx={styles.signInBox}>
      <Paper sx={styles.signInContainer}>
        <Typography variant="h1" sx={{ mb: 1 }}>
          Sign In
        </Typography>
        <form>
          <Box sx={styles.formContainer}>
            <TextField placeholder="Email *" variant="standard" sx={styles.signInTextField} />
            <TextField
              placeholder="Password *"
              type="password"
              variant="standard"
              sx={styles.signInTextField}
            />
            <FormControlLabel
              control={<Checkbox sx={styles.signInCheckbox} />}
              label="Remember me"
              sx={{ mt: 1 }}
            />
            <Box sx={{ display: "flex" }}>
              <Button type="submit" variant="contained" sx={{ mt: 2 }}>
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
