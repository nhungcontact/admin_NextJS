import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import AppBarSearch from "./AppBarSearch";
import AppBarNotification from "./AppBarNotification";
import AppBarAccount from "./AppBarAccount";
import { ColorModeContext } from "@/context/ColorModeContext";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function AppBarContent() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
      <AppBarSearch />
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: "flex" }}>
        <AppBarNotification />
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text.primary',
            borderRadius: 1,
            p: 3,
          }}
        >
          {theme.palette.mode} mode
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
        <AppBarAccount />
      </Box>
    </>
  );
}
export default AppBarContent;
