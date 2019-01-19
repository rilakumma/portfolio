import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";

export default (
  <Switch>
    <Route path="/admin" component={Admin} />
    <Route path="/" component={Home} />
  </Switch>
);
