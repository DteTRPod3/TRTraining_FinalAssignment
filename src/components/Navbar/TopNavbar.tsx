import React, { useState } from "react";
import "./TopNavbar.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import loggedProfile from "../../assets/man.png";
import UnknownProfile from "../../assets/profile.svg";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function TopNavbar() {
  useSelector((state: any) => state.authentication);
  const [isLoggedin, setIsLoggedin] = useState(() => {
    return false;
  });

  let profilepicture;

  const isloginHandler = () => {
    if (isloggedin === true) {
      setIsLoggedin(false);
      localStorage.setItem("isLoggedin", "false");
    } else {
      localStorage.setItem("isLoggedin", "true");
      setIsLoggedin(true);
    }
  };
  const isloggedin: boolean = isLoggedin;
  isloggedin === true
    ? (profilepicture = loggedProfile)
    : (profilepicture = UnknownProfile);

  return (
    <div className="layout--header--main--container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark layout--header">
        <div className="nav-link">
          <NavLink
            to={"/"}
            data-testid="XtremecarsLink"
            className="navbar-brand layout--header--logo"
          >
            <img src={Logo} alt="Xtreme cars logo" />
            XTREME CARS
          </NavLink>
        </div>

        <div className="collapse navbar-collapse layout--header--container">
          <ul className="navbar-nav mr-auto layout--header--lists">
            <li className="nav-item layout--header--list active">
              <NavLink
                className="nav-link layout--header--link all-cars "
                to="/cars"
                data-testid="AllcarsLink"
                state={{ from: "cars" }}
              >
                ALL CARS
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse layout--header--container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item layout--header--list">
              <NavLink
                to="/new_cars"
                className="nav-link layout--header--link"
                data-testid="NewcarsLink"
                state={{ from: "new_cars" }}
              >
                NEW CARS
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse layout--header--container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item layout--header--list">
              <NavLink
                to="/used_cars"
                className="nav-link layout--header--link"
                data-testid="UsedcarsLink"
                state={{ from: "used_cars" }}
              >
                USED CARS
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse layout--header--container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item layout--header--list">
              <Link to="#" className="nav-link layout--header--link">
                <Button variant="light" onClick={() => isloginHandler()}>
                  {isLoggedin ? "Logout" : " Login/Signup"}
                </Button>
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav mr-auto ">
            <li className="nav-item layout--header--list ps-2 ">
              <Link to="#" className="nav-link layout--header--link">
                <img
                  data-testid="profileImage"
                  className="profile"
                  src={profilepicture}
                  alt="Profile logo"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default TopNavbar;
