import { SxProps, Theme } from "@mui/material";

export const signInBox: SxProps<Theme> = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const signInContainer: SxProps<Theme> = {
  padding: "20px",
  width: "400px",
  backgroundColor: "secondary.main",
  color: "common.white",
};

export const formContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

export const signInTextField: SxProps<Theme> = {
  mt: 3,
  "& .MuiInputBase-input": {
    color: "common.white",
  },
  "& .MuiInputLabel-root": {
    color: "common.white",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "common.white",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled, .Mui-error):before": {
    borderBottomColor: "common.white",
  },
};

export const signInCheckbox: SxProps<Theme> = {
  color: "common.white",
};

export const signInInfoCaption: SxProps<Theme> = {
  color: "error.main",
};
