import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Notes from "./components/Notes";
import { useNotes } from "./context/Notes";
import { useUser } from "./context/User";
import firebaseAuthService from "./services/firebaseAuthService";
import firestoreService from "./services/firestoreService";

const Routes = () => {
  const { user, setUser } = useUser();
  const { notes, setNotes } = useNotes();
  const [loadScreen, setLoadScreen] = useState(true);

  useEffect(() => {
    firebaseAuthService.onAuthStateChangedSetUser(setUser);
    setTimeout(() => {
      setLoadScreen(false);
    }, 500);
  }, []);
  if (loadScreen) {
    return null;
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path="/notes">
            {user.uid ? <Redirect to="/notes" /> : <Redirect to="/login" />}

            <Notes />
          </Route>
          <Route exact path="/login">
            {user.uid ? <Redirect to="/notes" /> : <Redirect to="/login" />}
            <Login />
          </Route>
          <Route exact path="/">
            {user.uid ? <Redirect to="/notes" /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
    );
  }
};

export default Routes;
