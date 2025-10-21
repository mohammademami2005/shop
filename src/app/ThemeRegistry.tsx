'use client';

import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";


const muiCache = createCache({ key: "mui", prepend: true });

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <button
          onClick={toggleTheme}
          style={{
            position: "fixed",
            top: 16,
            right: 16,
            background: theme.palette.primary.main,
            color: theme.palette.getContrastText(theme.palette.primary.main),
            border: "none",
            borderRadius: 8,
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          {mode === "light" ? "Dark" : "Light"} Mode
        </button>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
