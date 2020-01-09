//others
import React from "react";
import { Link } from "react-router-dom";
import GuestLandingForm from './GuestLandingForm';

//logo import
import logo from "../images/logov2.png";

//Styles import
import NavigationStyles from "../styles/_NavigationStyles";

const Navigation = () => {



  //Invokes the styles...
  const NavigationStyle = NavigationStyles();
  const onSubmit = (e => {
    console.log('In Navigation: OnSubmit() ');
    localStorage.clear();
  })

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
          <Link onClick={onSubmit} className={NavigationStyle.link} to="/">
            Logout
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
