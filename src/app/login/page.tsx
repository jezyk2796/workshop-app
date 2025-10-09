"use client";
import { Metadata } from "next";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import * as styles from "./login.styles";

const metadata: Metadata = {
  title: "Sign In",
};

const LoginPage = () => {
  return (
    <Box sx={styles.loginBox}>
      <Paper sx={styles.loginContainer}>
        <Typography variant="h1" sx={styles.header}>
          Sign In
        </Typography>
        <form>
          <Box sx={styles.formContainer}>
            <TextField placeholder="Email *" variant="standard" sx={styles.loginTextField} />
            <TextField
              placeholder="Password *"
              type="password"
              variant="standard"
              sx={styles.loginTextField}
            />
            <FormControlLabel
              control={<Checkbox sx={styles.loginCheckbox} />}
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
              <Link href="" underline="none">
                &nbsp;Click here to create one
              </Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
