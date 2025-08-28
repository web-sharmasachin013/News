// src/components/Topbar.jsx
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const Topbar = () => {
  return (
    <div className="container-fluid d-none d-lg-block">
      {/* Top Row */}
      <div className="row align-items-center bg-dark px-lg-5">
        {/* Left Side */}
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-sm bg-dark p-0">
            <ul className="navbar-nav ml-n2">
              <li className="nav-item border-right border-secondary">
                <a className="nav-link text-body small" href="#">
                  Monday, January 1, 2045
                </a>
              </li>
              <li className="nav-item border-right border-secondary">
                <a className="nav-link text-body small" href="#">
                  Advertise
                </a>
              </li>
              <li className="nav-item border-right border-secondary">
                <a className="nav-link text-body small" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body small" href="#">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Side */}
        <div className="col-lg-3 text-right d-none d-md-block">
          <nav className="navbar navbar-expand-sm bg-dark p-0">
            <ul className="navbar-nav ml-auto mr-n2">
              <li className="nav-item">
                <a className="nav-link text-body" href="#">
                  <small className="fab fa-twitter"></small>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="#">
                  <small className="fab fa-facebook-f"></small>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="#">
                  <small className="fab fa-linkedin-in"></small>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="#">
                  <small className="fab fa-instagram"></small>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="#">
                  <small className="fab fa-google-plus-g"></small>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="#">
                  <small className="fab fa-youtube"></small>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Logo + Ad Row */}
      <div className="row align-items-center bg-white py-3 px-lg-5">
        <div className="col-lg-4">
          <a href="/" className="navbar-brand p-0 d-none d-lg-block">
            <h1 className="m-0 display-4 text-uppercase text-primary">
              Biz
              <span className="text-secondary font-weight-normal">News</span>
            </h1>
          </a>
        </div>
        <div className="col-lg-8 text-center text-lg-right">
          <a href="https://htmlcodex.com">
            <img
              className="img-fluid"
              src="/img/ads-728x90.png"
              alt="Advertisement"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
