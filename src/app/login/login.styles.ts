import { SxProps, Theme } from "@mui/material";

export const loginBox: SxProps<Theme> = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const loginContainer: SxProps<Theme> = {
  padding: "20px",
  width: "400px",
  backgroundColor: "secondary.main",
  color: "#fff",
};

export const header: SxProps<Theme> = {
  fontSize: "30px",
  marginBottom: "10px",
};

export const formContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

export const loginTextField: SxProps<Theme> = {
  mt: 3,
  "& .MuiInputBase-input": {
    color: "#fff",
  },
  "& .MuiInputLabel-root": {
    color: "#fff",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#fff",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled, .Mui-error):before": {
    borderBottomColor: "#fff",
  },
};

export const loginCheckbox: SxProps<Theme> = {
  color: "#fff",
};

export const signInInfoCaption: SxProps<Theme> = {
  color: "red",
};
