import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#ce93d8" },
    info: { main: "#f00" },
    background: { default: "#121212", paper: "#1e1e1e" },
    text: { primary: "#fff" },
    custom: {
      // پس‌زمینه
      background: {
        slate950: "#020617",
        slate900: "#0f172a",
        indigo950: "#1e1b4b",
      },

      // کارت و سطوح
      cards: {
        slate900: "#0f172a",
        slate800: "#1e293b",
        slate700: "#334155",
      },

      // متن‌ها
      texts: {
        white: "#ffffff",
        slate300: "#cbd5e1",
        slate500: "#64748b",
        amber500: "#f59e0b",
      },

      // دکمه‌ها و آکسانت‌ها
      buttons: {
        blue400: "#60a5fa",
        blue500: "#3b82f6",
        blue600: "#2563eb",
        indigo500: "#6366f1",
        indigo600: "#4f46e5",
        slate600: "#475569",
        red950: "#450a0a",
        red400: "#f87171",
        red500: "#ef4444",
      },
    },
  },
  typography: {
    fontFamily: 'Madefor, Arial, sans-serif',
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
            // borderColor: '#fff',
            background: "linear-gradient(90deg,#155cfb,#432dd7)",
            // boxShadow: "0 6px 25px rgba(255,255,255,0.1)",
            color: "#fafafa",
            transition: "all 0.4s",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 6px 14px rgba(255,255,255,0.2)",
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

export default darkTheme;