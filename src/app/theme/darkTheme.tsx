import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#1e1e1e" },
    secondary: { main: "#ce93d8" },
    background: { default: "#323232", paper: "#1e1e1e" },
    text: { primary: "#fff" },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export default darkTheme;
