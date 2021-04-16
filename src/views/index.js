import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Search from "./search";

const AppStack = ({ match }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search" component={Search} />
        <Redirect to="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppStack;
