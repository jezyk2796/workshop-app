import { SxProps, Theme } from "@mui/material";

export const homeContainer: SxProps<Theme> = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 2,
};

export const homeCard: SxProps<Theme> = {
  p: 6,
  textAlign: "center",
  backgroundColor: "secondary.main",
  color: "common.white",
};
