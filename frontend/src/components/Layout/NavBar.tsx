import React from "react";
import { NavLink } from "react-router-dom";
import CartButton from '../Cart/CartButton'

let Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/mens">
                Mens
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/womens">
                Womens
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/jewelery'>Jewelery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/electronics'>Electronics</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <NavLink className="nav-link" to='/cart'><CartButton/></NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to='/orders'>Orders</NavLink>
              </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
