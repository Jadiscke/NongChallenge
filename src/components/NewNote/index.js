import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

import { Button, Icon, IconButton, TextField, Box } from "@material-ui/core";
import firestoreService from "../../services/firestoreService";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: [theme.spacing(2), 0],
  },
  form: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    minHeight: theme.spacing(50),
    justifyContent: "space-between",
  },
  box: {
    textAlign: "right",
  },
  submitButton: {
    justifySelf: "flex-end",
  },
}));

function NewNote({ loadNotes }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;

    const error = await firestoreService.createNote({ name, description });
    if (error) {
      console.log(error);
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={classes.box}>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <Icon fontSize="large" color="primary">
          add_circle
        </Icon>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <form className={classes.form} onSubmit={handleSubmit}>
          <Box flexDirection="column" display="flex">
            <Typography
              className={classes.typography}
              color="primary"
              variant="h5"
            >
              Nova Nota
            </Typography>
            <TextField placeholder="Nome" id="name" name="name"></TextField>
            <TextField
              placeholder="Descrição"
              variant="filled"
              rowsMax="20"
              multiline
              id="description"
              name="description"
            ></TextField>
          </Box>

          <Button
            variant="contained"
            color="primary"
            className={classes.submitButton}
            type="submit"
          >
            Criar
          </Button>
        </form>
      </Popover>
    </div>
  );
}

export default NewNote;
