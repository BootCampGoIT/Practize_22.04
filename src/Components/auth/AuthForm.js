import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  loginOperation,
  registrationOperation,
} from "../../redux/auth/authOperations";
import { isAuthSelector } from "../../redux/auth/authSelectors";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  // const isAuth = useSelector(isAuthSelector);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    isRegistrationForm()
      ? dispatch(registrationOperation({ email, password }))
      : dispatch(loginOperation({ email, password }));
  };

  const isRegistrationForm = () => {
    return location.pathname === "/registration"; //true
  };

  return (
    <>
      <h2>
        Please,
        {isRegistrationForm() ? "register" : "login"}!
      </h2>
      <form onSubmit={onHandleSubmit}>
        <label>
          Email:
          <input
            type='text'
            name='email'
            value={email}
            onChange={onHandleChange}
          />
        </label>
        <label>
          Password:
          <input
            type='text'
            name='password'
            value={password}
            onChange={onHandleChange}
          />
        </label>
        <button type='submit'>
          {isRegistrationForm() ? "register" : "login"}
        </button>
      </form>
    </>
  );
};

export default AuthForm;
