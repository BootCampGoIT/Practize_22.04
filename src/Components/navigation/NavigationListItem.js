import React from "react";
import { NavLink } from "react-router-dom";

const NavigationListItem = ({
  isAuth,
  isPrivate,
  isRestricted,
  path,
  exact,
  name,
}) => {
  return (
    <>
      {!isPrivate && !isRestricted && (
        <li key={path}>
          <NavLink
            exact={exact}
            to={path}
            className='navLink'
            activeClassName='active_navLink'>
            {name}
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
            {name}
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
            {name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationListItem;
