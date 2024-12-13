import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Groups from "./groups";

const Events = ({ match }) => {
  return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/groups`} />
      <Route path={`${match.url}/groups`} component={Groups} />
    </Switch>
  );
};

export default Events;
