import React from "react";

import {
  MuiThemeProvider,
  AppBar,
  Typography,
  Toolbar,
  createMuiTheme,
} from "@material-ui/core";
import { green, lightBlue } from "@material-ui/core/colors";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    text: {
      primary: lightBlue[50],
    },
  },
});

function Layout(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="textPrimary">
              Crop Scouting App
            </Typography>
          </Toolbar>
        </AppBar>
        {props.children}
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default Layout;
