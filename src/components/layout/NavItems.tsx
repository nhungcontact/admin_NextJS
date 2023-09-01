/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
// mui imports
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  useTheme,
  ListItemButton,
  Collapse,
  Box,
} from "@mui/material";
import Link from "next/link";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
type NavGroup = {
  [x: string]: any;
  id?: number;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: any;
  items?: NavGroup[];
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
};

interface ItemType {
  item: NavGroup;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  hideMenu?: any;
  level?: number | any;
  pathDirect?: string;
}

const NavItem = ({ item, level, pathDirect, onClick }: ItemType) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon = <Icon stroke={1.5} size="1.3rem" />;

  const ListItemStyled = styled(ListItem)(() => ({
    padding: 0,
    ".MuiButtonBase-root": {
      whiteSpace: "nowrap",
      marginBottom: "2px",
      padding: "8px 10px",
      borderRadius: "8px",
      backgroundColor: level > 1 ? "transparent !important" : "inherit",
      color: theme.palette.text.secondary,
      paddingLeft: "10px",
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: "white",
        },
      },
    },
  }));
  return (
    <List component="div" disablePadding key={item.id}>
      <ListItemStyled>
        <ListItemButton
          component={Link}
          href={item.href ? item.href : "/"}
          disabled={item.disabled}
          selected={item.href ? pathDirect === item.href : false}
          target={item.external ? "_blank" : ""}
          onClick={item.items ? handleClick : onClick}
        >
          <ListItemIcon
            sx={{
              minWidth: "50px",
              p: "3px 0",
              color: "inherit",
            }}
          >
            {itemIcon}
          </ListItemIcon>
          <ListItemText>
            <>{item.title}</>
          </ListItemText>
          {item.items && (
            <Box>
              { open ? <ExpandLess /> : <ExpandMore />}
            </Box>
          )}
        </ListItemButton>
      </ListItemStyled>
      <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
        >
          <List
            component="div"
            disablePadding
          >
            {item.items && item.items.map((val)=>(
              <ListItemStyled key={val.id}>
                <ListItemButton 
                  component={Link}
                  href={val.href ? val.href : "/"}
                  disabled={val.disabled}
                  selected={val.href ? pathDirect === val.href : false}
                  target={val.external ? "_blank" : ""}
                  onClick={val.items ? handleClick : onClick}
                >
                <ListItemIcon>
                  {/* <StarBorder /> */}
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
              </ListItemStyled>
            ))}
        </List>
      </Collapse>
    </List>
  );
};

export default NavItem;
