import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
    background: { default: "#fafafa", paper: "#fff" },
    text: { primary: "#000" },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export default lightTheme;
