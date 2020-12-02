import React from "react";
import { Typography, Divider, Grid, makeStyles } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";

const styles = makeStyles({
  note: {
    backgroundColor: yellow[100],
    position: "relative",
    margin: "1em",
    height: "20em",
    width: "100%",
  },
  date: {
    position: "absolute",
    bottom: "0.2em",
    right: "1em",
  },
});

function Note(props) {
  const classes = styles();
  const date = props.data.date;
  if (date) var newDate = date.toDate().toLocaleDateString("pt-BR");
  console.log(newDate);
  return (
    <Grid
      container
      item
      noWrap
      xs={12}
      sm={6}
      md={4}
      xl={3}
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      key={props.key}
      className={classes.note}
    >
      <Typography component="h5" variant="h5">
        Nome: {props.data.name}
      </Typography>
      <Divider />
      <Typography component="body1" variant="body1">
        Descrição: {props.data.description}
      </Typography>
      <Typography className={classes.date} component="body2" variant="body2">
        {date ? newDate : "dd/mm/aaaa"}
      </Typography>
    </Grid>
  );
}

export default Note;
