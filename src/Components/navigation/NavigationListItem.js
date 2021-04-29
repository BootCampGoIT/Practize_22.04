import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LangContext } from "../App";
// import { useLanguage } from "../../hooks/useLanguage";

const NavigationListItem = ({
  isAuth,
  isPrivate,
  isRestricted,
  path,
  exact,
  name,
}) => {
  const { language } = useContext(LangContext);
  return (
    <>
      {!isPrivate && !isRestricted && (
        <li key={path}>
          <NavLink
            exact={exact}
            to={path}
            className='navLink'
            activeClassName='active_navLink'>
            {language.navigation[name]}
          </NavLink>
        </li>
      )}

      {!isAuth && !isPrivate && isRestricted && (
        <li key={path}>
          <NavLink
            exact={exact}
            to={path}
            className='navLink'
            activeClassName='active_navLink'>
            {language.navigation[name]}
          </NavLink>
        </li>
      )}
      {isAuth && isPrivate && !isRestricted && (
        <li key={path}>
          <NavLink
            exact={exact}
            to={path}
            className='navLink'
            activeClassName='active_navLink'>
            {language.navigation[name]}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationListItem;
