import { Box, Button, Paper, Typography } from "@mui/material";
import NextLink from "next/link";
import * as styles from "./home-page.style";

export default function Home() {
  return (
    <Box sx={styles.homeContainer}>
      <Paper sx={styles.homeCard}>
        <Typography variant="h1" sx={{ mb: 3, fontWeight: "bold" }}>
          Welcome to Workshop App!
        </Typography>
        <Typography variant="body1" sx={{ mb: 5 }}>
          Please sign in or create a new account to continue.
        </Typography>
        <Box>
          <Button
            variant="contained"
            size="large"
            component={NextLink}
            href="/sign-in"
            sx={{ mr: 2 }}
          >
            Sign In
          </Button>
          <Button variant="contained" size="large" component={NextLink} href="/sign-up">
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
