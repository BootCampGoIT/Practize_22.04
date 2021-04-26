import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";
import { connect } from "react-redux";

const NavigationRoutes = ({ routes, isAuth }) => {
  return (
    <Suspense fallback={<h2>...loading</h2>}>
      <Switch>
        {routes.map((route) =>
          route.isPrivate ? (
            <PrivateRoute {...route} isAuth={isAuth} key={route.path} />
          ) : (
            <PublicRoute {...route} isAuth={isAuth} key={route.path} />
          )
        )}
      </Switch>
    </Suspense>
  );
};

const mstp = (state) => ({ isAuth: state.auth.idToken });
export default connect(mstp)(NavigationRoutes);
