import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";

export default (
  <Switch>
    <Route component={Nav} exact path="/" />
  </Switch>
);
