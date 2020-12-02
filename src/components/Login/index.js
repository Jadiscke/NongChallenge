import {
  Container,
  TextField,
  Typography,
  makeStyles,
  FormControl,
  Button,
} from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import React from "react";
import { useUser } from "../../context/User";

const styles = makeStyles({
  login: {
    backgroundColor: yellow[50],
    padding: "3em 0",
    margin: "5em auto 0",
    display: "flex",
    flexDirection: "column",
  },
  field: {
    maxWidth: "20em",
    margin: "1em auto",
  },
});

function Login() {
  const classes = styles();
  const { user, setUser } = useUser();
  return (
    <Container className={classes.login} maxWidth="sm">
      <Typography variant="h5" component="h3" align="center">
        Login
      </Typography>

      <FormControl>
        <TextField
          placeholder="email@example.com"
          label="E-mail"
          type="email"
          color="secondary"
          className={classes.field}
          required
          variant="outlined"
        ></TextField>
      </FormControl>
      <FormControl>
        <TextField
          label="Senha"
          placeholder="*****"
          color="secondary"
          type="password"
          className={classes.field}
          required
          variant="outlined"
        ></TextField>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={() => {
          setUser({ id: 1, name: "Vinicius" });
        }}
      >
        Login
      </Button>
    </Container>
  );
}

export default Login;
