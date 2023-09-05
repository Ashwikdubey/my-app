import React from "react";
import PropTypes from "prop-types";
import {Link}  from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode}${props.red} bg-${props.mode}${props.red}`}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >
            {props.title}
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link" >
                  About
                </Link>
              </li>
            </ul>
            
              <div className="form-check form-switch">
                <input className="form-check-input"type="checkbox"  role="switch"id="flexSwitchCheckDefault" onClick={props.togglemode}/>
               
                 <label className={`form-check-label text-${(props.mode==="light")?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">
                  Dark Mode
                 </label>
              </div>
              <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"onClick={props.toggleRed}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red Mode</label>
</div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "set title here",
};
