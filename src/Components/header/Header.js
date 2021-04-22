import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationList from "../navigation/NavigationList";

const Header = () => {
  return (
    <header>
      <nav>
        <NavigationList routes={mainRoutes} />
      </nav>
    </header>
  );
};

export default Header;
