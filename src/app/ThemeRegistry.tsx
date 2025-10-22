'use client'

import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";
import useThemeStore from "./store/store";

const muiCache = createCache({ key: "mui", prepend: true });

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const { mode } = useThemeStore();
  const [hydrated, setHydrated] = React.useState(false);

  // وقتی Zustand داده رو از localStorage خونده، hydrated میشه true
  React.useEffect(() => {
    setHydrated(true);
  }, []);

  // تا زمانی که Zustand هنوز مقدار localStorage رو لود نکرده، چیزی رندر نکن
  if (!hydrated) {
    return null;
  }

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
