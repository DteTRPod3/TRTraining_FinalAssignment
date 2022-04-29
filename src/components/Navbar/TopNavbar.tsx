import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./TopNavbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

function TopNavbar() {
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
              <Link to="" className="nav-link layout--header--link">
                MY PROFILE
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default TopNavbar;
