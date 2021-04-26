import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationListContainer } from "./NavigationStyled";
import { useSelector, connect } from "react-redux";
import { logout } from "../../redux/auth/authActions";
import NavigationListItem from "./NavigationListItem";

const NavigationList = ({ routes, isAuth, logout }) => {
  // const isAuth = useSelector((state) => state.auth.idToken);
  console.log(isAuth);
  return (
    <NavigationListContainer>
      <ul className='navigation-list'>
        {routes.map((route) => (
          <NavigationListItem isAuth={isAuth} {...route} key={route.path} />
        ))}
        {isAuth && (
          <li>
            <button type='button' onClick={logout}>
              LOGOUT
            </button>
          </li>
        )}
      </ul>
    </NavigationListContainer>
  );
};

const mstp = (state) => ({
  isAuth: state.auth.idToken,
});

export default connect(mstp, { logout })(NavigationList);
