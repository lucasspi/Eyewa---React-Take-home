import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Search = React.lazy(() => import("./search"));

const AppStack = ({ match }) => {
  return (
    <Fragment>
      <Switch>
        <Route
          path={`${match.url}/search`}
          render={(props) => <Search {...props} />}
        />
        <Redirect to="/search" />
      </Switch>
    </Fragment>
  );
};

export default AppStack;
