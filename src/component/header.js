import React from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth";

import "./style/header.css";
import logo from "./image/logo.png";

const Header = props => {
  return (
    <AuthContext.Consumer>
      {user => {
        if (user) {
          return (
            <>
              <nav className="navbar-flexwrapper">
                <div className="cactus-logo">
                  <div>
                    <div className="brand-name" to="/">
                      CACTUS
                    </div>
                    <div>
                      <div className="brand-slogan">
                        Where plants meet friends
                      </div>
                    </div>
                    <img className="logo-img" src={logo} alt="logo-img" />
                  </div>
                </div>
                <div className="navitem-wrapper">
                  <div className="nav-row">
                    <Link className="nav-item" to="/">
                      Home
                    </Link>
                  </div>
                  <div className="nav-row">
                    <Link className="nav-item" to="/search">
                      Search
                    </Link>
                  </div>
                  <div className="nav-row">
                    <Link className="nav-item" to="/logout">
                      Logout
                    </Link>
                  </div>
                </div>
              </nav>
            </>
          );
        } else {
          return (
            <>
              <nav className="navbar-flexwrapper">
                <div className="cactus-logo">
                  <div>
                    <div className="brand-name" to="/">
                      CACTUS
                    </div>
                    <div>
                      <div className="brand-slogan">
                        Where plants meet friends
                      </div>
                    </div>
                    <img className="logo-img" src={logo} alt="logo-img" />
                  </div>
                </div>
                <div className="navitem-wrapper">
                  <div className="nav-row">
                    <Link className="nav-item" to="/">
                      Home
                    </Link>
                  </div>
                  <div className="nav-row">
                    <Link className="nav-item" to="/login">
                      Login
                    </Link>
                  </div>
                  <div className="nav-row">
                    <Link className="nav-item" to="/signup">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </nav>
            </>
          );
        }
      }}
    </AuthContext.Consumer>
  );
};

export default Header;
