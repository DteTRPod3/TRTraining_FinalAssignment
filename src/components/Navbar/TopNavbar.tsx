import React, { useState } from "react";
import "./TopNavbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import loggedProfile from "../../assets/man.png";
import UnknownProfile from "../../assets/profile.svg";

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
        <Link
          to={"/"}
          data-testid="XtremecarsLink"
          className="navbar-brand layout--header--logo"
        >
          <img src={Logo} alt="Xtreme cars logo" />
          XTREME CARS
        </Link>
        <div className="collapse navbar-collapse layout--header--container">
          <ul className="navbar-nav mr-auto layout--header--lists">
            <li className="nav-item layout--header--list">
              <Link
                to="/cars"
                className="nav-link layout--header--link"
                data-testid="AllcarsLink"
              >
                ALL CARS
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse layout--header--container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item layout--header--list">
              <Link to="#" className="nav-link layout--header--link">
                NEW CARS
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse layout--header--container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item layout--header--list">
              <Link to="#" className="nav-link layout--header--link">
                USED CARS
              </Link>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse layout--header--container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item layout--header--list">
              <Link
                to="#"
                onClick={() => isloginHandler()}
                className="nav-link layout--header--link"
              >
                {isLoggedin ? "LOGOUT" : " login/Signup"}
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
