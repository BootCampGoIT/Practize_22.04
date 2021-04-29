import React from "react";

import { NavigationListContainer } from "./NavigationStyled";
import { useSelector, useDispatch } from "react-redux";

import NavigationListItem from "./NavigationListItem";
import { isAuthSelector } from "../../redux/auth/authSelectors";
import { logout } from "../../redux/auth/authActions";
import LanguageSelect from "../languageSelect/LanguageSelect";

const NavigationList = ({ routes }) => {
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useDispatch();

  const dispLogout = () => dispatch(logout());

  return (
    <NavigationListContainer>
      <ul className='navigation-list'>
        {routes.map((route) => (
          <NavigationListItem isAuth={isAuth} {...route} key={route.path} />
        ))}
        {isAuth && (
          <li>
            <button type='button' onClick={dispLogout}>
              LOGOUT
            </button>
          </li>
        )}
      </ul>
      <LanguageSelect />
    </NavigationListContainer>
  );
};

export default NavigationList;
