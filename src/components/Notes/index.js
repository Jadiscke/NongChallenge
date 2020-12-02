import React, { Component, useState, useEffect } from "react";

import { Container, Grid } from "@material-ui/core";

import firestoreService from "../../services/firestoreService";
import Note from "../Note";

function Notes() {
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
    <Container maxWidth="xl">
      <Grid spacing={1} container direction="row" justify="space-around">
        {notesList}
      </Grid>
    </Container>
  );
}

export default Notes;