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

function Note({ data }) {
  const classes = styles();
  const date = data.date;
  if (date) var newDate = date.toDate().toLocaleDateString("pt-BR");
  if (data.name) {
    return (
      <Grid
        container
        item
        nowrap="nowrap"
        xs={12}
        sm={6}
        md={4}
        xl={3}
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.note}
      >
        <Typography component="p" variant="body1">
          Nome: {data.name}
        </Typography>
        <Divider />
        <Typography component="p" variant="body1">
          Descrição: {data.description}
        </Typography>
        <Typography className={classes.date} component="span" variant="body2">
          {date ? newDate : "dd/mm/aaaa"}
        </Typography>
      </Grid>
    );
  } else {
    return null;
  }
}

export default Note;
