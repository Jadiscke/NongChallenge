import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Notes from "./components/Notes";
import { useUser } from "./context/User";

const Routes = () => {
  const { user } = useUser();
  return (
    <Router>
      <Switch>
        <Route exact path="/notes">
          {user.id ? <Redirect to="/notes" /> : <Redirect to="/login" />}
          <Notes />
        </Route>
        <Route exact path="/login">
          {user.id ? <Redirect to="/notes" /> : <Redirect to="/login" />}
          <Login />
        </Route>
        <Route exact path="/">
          {user.id ? <Redirect to="/notes" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
