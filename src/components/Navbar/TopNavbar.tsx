import React, { useState } from "react";
import "./TopNavbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import loggedProfile from "../../assets/man.png";
import UnknownProfile from "../../assets/profile.svg";
import { Button } from "react-bootstrap";

function TopNavbar() {
  const [isLoggedin, setisLoggedin] = useState(() => {
    return false;
  });

  let profilepicture;

  const isloginHandler = () => {
    if (isloggedin === true) {
      setisLoggedin(false);
      localStorage.setItem("isLoggedin", "false");
    } else {
      localStorage.setItem("isLoggedin", "true");
      setisLoggedin(true);
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
          <Link
            to={"/"}
            data-testid="XtremecarsLink"
            className="navbar-brand layout--header--logo"
          >
            <img src={Logo} alt="Xtreme cars logo" />
            XTREME CARS
          </Link>
        </div>

        <div className="collapse navbar-collapse layout--header--container">
          <ul className="navbar-nav mr-auto layout--header--lists">
            <li className="nav-item layout--header--list active">
              <Link
                to="/cars"
                className="nav-link layout--header--link all-cars"
                data-testid="AllcarsLink"
                state={{ from: "all-cars" }}
              >
                ALL CARS
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse layout--header--container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item layout--header--list">
              <Link
                to="/new_cars"
                className="nav-link layout--header--link"
                data-testid="AllcarsLink"
                state={{ from: "new-cars" }}
              >
                NEW CARS
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse layout--header--container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item layout--header--list">
              <Link
                to="/used_cars"
                className="nav-link layout--header--link"
                data-testid="AllcarsLink"
                state={{ from: "used-cars" }}
              >
                USED CARS
              </Link>
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
