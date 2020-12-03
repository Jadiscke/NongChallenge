import React from "react";

import {
  MuiThemeProvider,
  AppBar,
  Typography,
  Toolbar,
  createMuiTheme,
  Button,
  Icon,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { blue, green, lightBlue } from "@material-ui/core/colors";
import { useUser } from "../../context/User";
import firebaseAuthService from "../../services/firebaseAuthService";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    text: {
      primary: lightBlue[700],
      secondary: blue[900],
    },
  },
});

const styles = makeStyles(() => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Layout({ children }) {
  const { user, setUser } = useUser();
  const classes = styles();
  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              component="h1"
              type="title"
              color="textSecondary"
            >
              Crop Scouting App
            </Typography>
            {user.uid && (
              <Button
                onClick={() => {
                  firebaseAuthService.signOut();
                  setUser({ uid: "", email: "" });
                }}
                color="secondary"
              >
                Log Out
              </Button>
            )}
          </Toolbar>
        </AppBar>
        {children}
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default Layout;
