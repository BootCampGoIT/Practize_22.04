import React from "react";
import AuthForm from "../Components/auth/AuthForm";
// import { Route, Switch } from "react-router-dom";

const AuthPage = () => {
  return (
    <>
      <h2>Auth</h2>
      <AuthForm />
      {/* <Switch>
        <Route path='/signin' exact component={AuthForm} />
        <Route path='/signup' exact component={AuthForm} />
      </Switch> */}
    </>
  );
};

export default AuthPage;
