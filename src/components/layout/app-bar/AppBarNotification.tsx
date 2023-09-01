import * as React from "react";
import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  ClickAwayListener,
  Grow,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Popper,
  SvgIcon,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
export default function AppBarNotification() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <Tooltip title="Notifications">
        <IconButton
          size="small"
          sx={{ ml: 2 }}
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Badge
            badgeContent={4}
            color="success"
          >
            <SvgIcon>
              <NotificationsIcon />
            </SvgIcon>
          </Badge>
        </IconButton>
      </Tooltip>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        sx={{ overflow: "visible", filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))" }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <Card sx={{ minWidth: 275 }}>
                  <CardHeader
                    action={
                      <IconButton aria-label="close">
                        <CloseIcon />
                      </IconButton>
                    }
                    title={
                      <React.Fragment>
                        <Typography variant="body1" color="black">
                          Sandra Adams
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <CardContent>
                    <List sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Brunch this weekend?"
                          secondary={
                            <React.Fragment>
                              <Typography
                                variant="body2"
                                color="text.primary"
                              >
                                Ali Connors
                              </Typography>
                              {"3 min ago"}
                            </React.Fragment>
                          }
                        />
                        <ListItemSecondaryAction>
                          <Typography>3:00 AM</Typography>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider
                        variant="inset"
                        component="li"
                      />
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Summer BBQ"
                          secondary={
                            <React.Fragment>
                              <Typography
                                variant="body2"
                                color="text.primary"
                              >
                                to Scott, Alex, Jennifer
                              </Typography>
                              {"3 min ago"}
                            </React.Fragment>
                          }
                        />
                        <ListItemSecondaryAction>
                          <Typography>3:00 AM</Typography>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider
                        variant="inset"
                        component="li"
                      />
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt="Cindy Baker"
                            src="/static/images/avatar/3.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Oui Oui"
                          secondary={
                            <React.Fragment>
                              <Typography variant="body2" color="text.primary">
                                Sandra Adams
                              </Typography>
                              {"3 min ago"}
                            </React.Fragment>
                          }
                        />
                        <ListItemSecondaryAction>
                          <Typography>3:00 AM</Typography>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                  </CardContent>
                  <Divider />
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button size="small">View All</Button>
                  </CardActions>
                </Card>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}