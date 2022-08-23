
// import "../stylesheets/header.css";
import React, { useState } from "react";
import Signup from "../component/Signup";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { MusicContext } from "../MusicContext";

const Header = (props) => {
  const [signupOpen, setSignupOpen] = useState(false);
  const currentUser = sessionStorage.getItem("user");
  const [MusicList, setMusicList, loading, setLoading] =
    useContext(MusicContext);

  const logout = () => {
    sessionStorage.removeItem("user");
    window.location.replace("/loginpage");
  };

  const showLoggedIn = () => {
    if (currentUser) {
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/addmusicpage">
              Add Music
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/browsemusicpage">
              BrowseMusic
            </Link>
          </li>

          <li className="nav-item">
            <button onClick={logout} className="btn btn-danger">
              Logout
            </button>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/loginpage" activeClassName="active">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signuppage" activeClassName="active">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/addmusicpage" activeClassName="active">
              Add Music
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Walton
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/browsemusicpage"
              >
                Browse Music
              </NavLink>
            </li>
            {showLoggedIn()}
          </ul>
        </div>
      </div>
    </nav>
  )

};
export default Header;