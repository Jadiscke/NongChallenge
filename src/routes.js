import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./components/Notes";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Notes />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
