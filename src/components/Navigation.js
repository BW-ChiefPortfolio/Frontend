//others
import React from "react";
import { Link } from "react-router-dom";

//logo import
import logo from "../images/logov2.png";

//Material UI Imports
import NavigationStyles from "../styles/_NavigationStyles";

const Navigation = () => {
  const NavigationStyle = NavigationStyles();

  return (
    <React.Fragment>
      <nav className={NavigationStyle.navContainer}>
        <div className={NavigationStyle.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={NavigationStyle.linkContainer}>
          <Link className={NavigationStyle.link} to="/">
            Home
          </Link>
          <Link className={NavigationStyle.link} to="/login">
            Login
          </Link>
          <Link className={NavigationStyle.link} to="/chefsignup">
            Sign up
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
