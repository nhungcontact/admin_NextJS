"use client";

import { CssBaseline, PaletteMode, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { EmotionCacheProvider } from "./EmotionCacheProvider";
import SWRProvider from "./SWRProvider";
import { SessionProvider } from "next-auth/react";
import { ColorModeContext } from "@/context/ColorModeContext";

type Props = {
  children: React.ReactNode;
};

function AppProviders({ children }: Props) {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <>
      <CssBaseline />
      <EmotionCacheProvider options={{ key: "mui-css" }}>
        <SessionProvider>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
            <SWRProvider>{children}</SWRProvider>
          </ThemeProvider>
          </ColorModeContext.Provider>
        </SessionProvider>
      </EmotionCacheProvider>
    </>
  );
}

export default AppProviders;
