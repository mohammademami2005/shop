import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#fafafa" },
    secondary: { main: "#9c27b0" },
    background: { default: "#fafafa", paper: "#fff" },
    text: { primary: "#000" },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export default lightTheme;
