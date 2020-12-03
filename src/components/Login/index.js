import {
  Container,
  TextField,
  Typography,
  makeStyles,
  FormControl,
  Button,
} from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import { useUser } from "../../context/User";
import firebaseAuthService from "../../services/firebaseAuthService";

const styles = makeStyles((theme) => ({
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
  button: {
    padding: "1em 5em",
  },
}));

function Login() {
  const classes = styles();
  const { setUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginAttempt, setLoginAttempt] = useState(false);
  const [loginError, setLoginError] = useState();
  useEffect(() => {
    firebaseAuthService.onAuthStateChangedSetUser(setUser);
  }, [loginAttempt]);
  return (
    <Container className={classes.login} maxWidth="sm">
      {loginError && (
        <Typography
          variant="body2"
          component="span"
          color="secondary"
          align="center"
        >
          Houve um erro ao tentar o acesso ao sistema. Verifique seu e-mail e
          senha!
        </Typography>
      )}
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
          id="email"
          value={email}
          onInput={(event) => {
            setEmail(event.target.value);
          }}
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
          id="password"
          value={password}
          onInput={(event) => {
            setPassword(event.target.value);
          }}
        ></TextField>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        type="button"
        centerRipple
        className={[classes.button, classes.field]}
        onClick={async () => {
          const authError = await firebaseAuthService.signInWithEmailAndPassword(
            email,
            password
          );
          if (authError) {
            console.log(authError);
            setLoginError(authError);
          }
          setLoginAttempt(true);
        }}
      >
        Login
      </Button>
    </Container>
  );
}

export default Login;
