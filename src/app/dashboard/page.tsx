"use client";
import type { Metadata } from "next";
import { Box, Typography } from "@mui/material";

const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage = () => {
  return (
    <Box>
      <Typography>Hello dashboard</Typography>
    </Box>
  );
};

export default DashboardPage;
