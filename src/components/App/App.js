import React, { Component, useState, useEffect } from "react";

import {
  MuiThemeProvider,
  AppBar,
  Typography,
  Toolbar,
  createMuiTheme,
  Container,
  Grid,
} from "@material-ui/core";
import { green, lightBlue } from "@material-ui/core/colors";

import firestoreService from "../../services/firestoreService";
import { Note } from "../Note";
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

function App() {
  const [noteState, setNoteState] = useState([
    { key: 0, data: { name: "", description: "", date: "" } },
  ]);
  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const notes = await firestoreService.getNotes();
      console.log(notes);
      setNoteState(notes);
    } catch (err) {
      console.log(err);
      setNoteState([{ key: 0, data: { name: "", description: "", date: "" } }]);
    }
  };
  const notesList = noteState.map((note) => {
    return <Note data={note.data} />;
  });
  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              My Awesome React App
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="xl">
          <Grid spacing={3} container direction="row" justify="flex-start">
            {notesList}
          </Grid>
        </Container>
        {/* <Button onClick={loadNotes}>Load notes</Button> */}
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default App;
