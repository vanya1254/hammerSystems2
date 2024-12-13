import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const Main = ({ match }) => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${match.url}/dashboard`}
          component={lazy(() => import(`./dashboard`))}
        />
        <Route
          path={`${match.url}/scheduler`}
          component={lazy(() => import(`./scheduler`))}
        />
        <Route
          path={`${match.url}/bookings`}
          component={lazy(() => import(`./bookings`))}
        />
        <Route
          path={`${match.url}/clients`}
          component={lazy(() => import(`./clients`))}
        />
        <Route
          path={`${match.url}/reviews`}
          component={lazy(() => import(`./reviews`))}
        />
        <Route
          path={`${match.url}/venues`}
          component={lazy(() => import(`./venues`))}
        />
        <Route
          path={`${match.url}/events`}
          component={lazy(() => import(`./events`))}
        />
        <Route
          path={`${match.url}/staff`}
          component={lazy(() => import(`./staff`))}
        />
        <Route
          path={`${match.url}/webModule`}
          component={lazy(() => import(`./webModule`))}
        />{" "}
        <Route
          path={`${match.url}/reservationBook`}
          component={lazy(() => import(`./reservationBook`))}
        />
        <Redirect from={`${match.url}`} to={`${match.url}/dashboard`} />
      </Switch>
    </Suspense>
  );
};

export default Main;
