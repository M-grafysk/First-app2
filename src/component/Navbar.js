import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <>
      <div className="navbar">
    <div className="nv navbar-brand">
      <img className="vr" src="src\component\img\icon.jpg" alt="Luv" />
      <h2 className="nv-1">WALTON</h2>
    </div>
    <div className="nav">
      <ul className="nav-item">
        <a href="#"> Store</a>
      </ul>
      <ul>
        <a href="#"> Premium Music</a>
      </ul>
      <ul>
        <a href="#"> About us</a>
      </ul>
      <ul>
        <a href="#"> Signup</a>
      </ul>
      <ul>
        <a href="#"> FAQ</a>
      </ul>
      <ul>
      <NavLink className="btn btn-primary" to="/loginpage"> login</NavLink>
      </ul>
      <ul>
        <NavLink className="btn btn-primary" to="/signuppage "> Signup </NavLink>
      </ul>
    </div>
  </div>
  
  <div className="main">
    <div className="section">
      <h1 className="sec1">
        ROYALTY FREE STOCK MUSIC <br /> ONLY ON{" "}
        <span className="sp1"> WALTON </span>
      </h1>
      <h4 className="sec2">
        LISTEN AND USE TOP QUALITY MUSIC  AND ADD EXCITEMENT AND
        PROFESSIONAL EDGE  TO YOUR CREATIVE WORK. FREE YOUR MIND FROM
        OUTER  DISTRACTION AND FOCUS ON YOUR BUSINESS.
      </h4>
    </div>
  </div>
  <div className="container">
    <dil className="row">
      <div className="col"></div>
    </dil>
  </div>

</>

    </>
  )
}

export default Navbar