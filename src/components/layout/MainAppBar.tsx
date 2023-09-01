import {
  AppBar,
  IconButton,
  SvgIcon,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBarContent from "./app-bar/AppBarContent";
import AppBarStyled from "./app-bar/AppBarStyled";

MainAppBar.maxHeight = 70;


type Props = {
  open: boolean;
  handleDrawerToggle: () => void;
};

function MainAppBar({ open, handleDrawerToggle }: Props) {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));

  const mainHeader = (
    <Toolbar>
      <IconButton
        onClick={handleDrawerToggle}
        edge="start"
        sx={{
          ...(!matchDownMD && {marginRight: 5}),
        }}
      >
        <SvgIcon color="primary">
          <MenuIcon />
        </SvgIcon>
      </IconButton>
      <AppBarContent />
    </Toolbar>
  );

  return (
    <>
      {!matchDownMD ? (
        <AppBarStyled
          position="fixed"
          open={open}
          sx={{
            bgcolor: "background.paper",
            backgroundImage: "none"
          }}
        >
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar
          position="fixed"
          sx={{ boxShadow:"none", bgcolor: "background.paper", backgroundImage: "none" }}
        >
          {mainHeader}
        </AppBar>
      )}
    </>
  );
}
export default MainAppBar;
