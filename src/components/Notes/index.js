import React, { useState, useEffect } from "react";

import { Container, Grid, Typography } from "@material-ui/core";

import firestoreService from "../../services/firestoreService";
import Note from "../Note";
import NewNote from "../NewNote";

function Notes() {
  const [notes, setNotes] = useState([
    { key: 0, data: { name: "", description: "", date: "" } },
  ]);
  useEffect(() => {
    loadNotes();
  }, [NewNote]);

  const loadNotes = async () => {
    try {
      const notes = await firestoreService.getNotes();
      setNotes(notes);
    } catch (err) {
      setNotes([{ key: 0, data: { name: "", description: "", date: "" } }]);
    }
  };
  const notesList = notes.map((note) => {
    return <Note data={note.data} />;
  });
  return (
    <>
      <Typography align="center" variant="h3">
        Notas
      </Typography>
      <NewNote />

      <Container maxWidth="xl">
        <Grid spacing={1} container direction="row" justify="space-around">
          {notes.length > 0 && notesList}
        </Grid>
      </Container>
    </>
  );
}

export default Notes;
