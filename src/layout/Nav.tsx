import React from "react";
import { Link, Outlet } from "react-router-dom";
import logoPath from "../assets/LOGO.png";

const Nav = (): JSX.Element => (
  <>
    <nav className="fixed z-20 px-4 pt-8">
      <Link to="/">
        <img src={logoPath} alt="logo" className="w-20" />
      </Link>
    </nav>
    <Outlet />
  </>
);

export default Nav;
