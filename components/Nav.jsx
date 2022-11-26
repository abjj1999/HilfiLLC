import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 d-flex justify-content-start">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav ">
          <a className="nav-item nav-link active" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="#">
            Features
          </a>
          <a className="nav-item nav-link" href="#">
            Pricing
          </a>
          <a className="nav-item nav-link disabled" href="#">
            Disabled
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
