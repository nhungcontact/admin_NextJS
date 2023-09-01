/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import {
//   Collapse,
//   Divider,
  List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   ListSubheader,
//   styled,
} from "@mui/material";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import StarBorder from "@mui/icons-material/StarBorder";
// import WidgetsIcon from "@mui/icons-material/Widgets";
// import GroupIcon from "@mui/icons-material/Group";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menuitems from "./MenuItems";
import NavGroup from "./NavGroups";
import NavItem from "./NavItems";
type Props = {
  openDrawer: boolean;
}
function DrawerContent({toggleMobileSidebar, openDrawer}:any & Props) {
  const pathName = usePathname();

  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 290, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {Menuitems.map((item) => {
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} openDrawer={openDrawer}/>;
            /* eslint no-else-return: "off" */
          } else {
            return (
              <NavItem item={item} key={item.id} pathDirect={pathName} onClick={toggleMobileSidebar}/>
            );
          }
        })}
      </List>
    </>
  );
}
export default DrawerContent;
