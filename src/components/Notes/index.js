import React, { useState, useEffect } from "react";

import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import firestoreService from "../../services/firestoreService";
import Note from "../Note";
import NewNote from "../NewNote";
import { useNotes } from "../../context/Notes";

const styles = makeStyles((theme) => ({
  insideBox: { display: "inline-block", alignSelf: "center" },
}));

function Notes() {
  const classes = styles();
  const { notes, setNotes } = useNotes();
  useEffect(async () => {
    await loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const notes = await firestoreService.getNotes();
      setNotes(notes);
    } catch (err) {
      setNotes([{ key: 0, data: { name: "", description: "", date: "" } }]);
    }
  };
  const notesList = notes.map((note) => {
    return <Note data={note.data} key={note.key} />;
  });
  return (
    <>
      <Box
        display="flex"
        maxWidth="400px"
        width="90%"
        flexDirection="row"
        justifyContent="space-between"
        alignContent="center"
        margin="0 auto"
      >
        <Typography
          align="center"
          variant="h4"
          component="h5"
          color="textPrimary"
          className={classes.insideBox}
        >
          Notas
        </Typography>
        <NewNote className={classes.insideBox} loadNotes={loadNotes} />
      </Box>

      <Container maxWidth="xl">
        <Grid
          spacing={1}
          container
          direction="row"
          justify="center"
          alignContent="center"
        >
          {notes.length > 0 && notesList}
        </Grid>
      </Container>
    </>
  );
}

export default Notes;
