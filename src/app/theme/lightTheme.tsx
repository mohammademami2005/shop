import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#fff" },
    secondary: { main: "#90caf9" },
    background: { default: "#fafafa", paper: "#fff" },
    info: { main: "#f00" },
    text: { primary: "#000" },
    custom: {
      // پس‌زمینه
      background: {
        slate50: "#f8fafc",
        blue50: "#eff6ff",
        indigo50: "#eef2ff",
      },

      // کارت و سطوح
      cards: {
        white: "#ffffff",
        slate100: "#f1f5f9",
        slate200: "#e2e8f0",
      },

      // متن‌ها
      texts: {
        slate900: "#0f172a",
        slate600: "#475569",
        slate400: "#94a3b8",
        amber600: "#d97706",
      },

      // دکمه‌ها و آکسانت‌ها
      buttons: {
        blue500: "#3b82f6",
        blue600: "#2563eb",
        blue700: "#1d4ed8",
        indigo600: "#4f46e5",
        indigo700: "#4338ca",
        red50: "#fef2f2",
        red400: "#f87171",
        red500: "#ef4444",
      },
    },
  },

  typography: {
    fontFamily: 'arvo, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "myCustom" },
          style: {
            borderRadius: 12,
            padding: "8px",
            textTransform: "none",
            fontWeight: 700,
            // border: "0.5px solid",
            // borderColor: '#000',
            background: "linear-gradient(90deg,#155cfb,#432dd7)",
            boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
            color: "#fafafa",
            transition: "all 0.4s",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 6px 14px rgba(0,0,0,0.4)",
            },
            "&.Mui-disabled": {
              opacity: 0.4,
              boxShadow: "none",
            },
          },
        },
      ],
    },
  },
});

export default lightTheme;
