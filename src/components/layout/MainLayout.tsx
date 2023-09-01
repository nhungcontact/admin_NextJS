"use client";

import React from "react";
import MainAppBar from "./MainAppBar";
// import MainFooter from "./MainFooter";
import MainDrawer from "./MainDrawer";
import { Box } from "@mui/material";
// import DrawerHeader from "./DrawerHeaderStyled";
import DrawerHeaderStyled from "./DrawerHeaderStyled";
import MainFooter from "./MainFooter";

type MainLayoutProps = {
  children: React.ReactNode;
};

MainLayout.innerPadding = MainAppBar.maxHeight + MainFooter.maxHeight;
const drawerWidth = 290;

function MainLayout({ children }: MainLayoutProps) {
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  
  return (
    <Box sx={{ display: 'flex', bgcolor: "background.paper" }}>
      <MainAppBar open={open} handleDrawerToggle={handleDrawerToggle}/>
      <MainDrawer 
        open={open} 
        handleDrawerToggle={handleDrawerToggle} 
        drawerWidth={drawerWidth}
      />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeaderStyled />
        <main style={{ minHeight: `calc(100vh - ${MainLayout.innerPadding}px)` }}>
          {children}
        </main>
         <MainFooter />
      </Box>

     
    </Box>
  );
}

export default MainLayout;
