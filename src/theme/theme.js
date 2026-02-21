import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#00f5ff",
      },
      background: {
        default: mode === "dark" ? "#0f172a" : "#f5f5f5",
        paper: mode === "dark" ? "#1e293b" : "#ffffff",
      },
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
  });
