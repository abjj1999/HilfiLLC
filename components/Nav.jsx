import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 d-flex justify-content-center">
      <div className="navbar-nav ">
        <Link className="nav-item nav-link active navi " href={"/"}>
          Home
        </Link>
        <Link className="nav-item nav-link active navi" href={"/"}>
          Services
        </Link>
        <Link className="nav-item nav-link active navi" href={"/contactus"}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
