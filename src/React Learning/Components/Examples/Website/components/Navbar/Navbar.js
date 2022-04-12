import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const state=useSelector((state)=>state.handleCart)

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div class="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            LA COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  PRODUCTS
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  ABOUT
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  CONTACT
                </NavLink>
              </li>
             
            </ul>

            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark m-2">
                <i classNameName="fa fa-sign-in m-1" ></i>Login</NavLink>
                <NavLink to="/register" className="btn btn-outline-dark m-2">
                <i className="fa fa-user-plus m-1" ></i>Register</NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark m-2">
                <i className="fa fa-shopping-cart m-1" ></i>Cart ({state.length})</NavLink>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
