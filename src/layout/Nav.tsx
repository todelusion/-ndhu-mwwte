import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logoPath from "../assets/LOGO.png";

const Nav = (): JSX.Element => {
  const [showNav, showNavSet] = useState(true);
  console.log(showNav);
  // const [lastY, lastYSet] = useState(0);
  useEffect(() => {
    let lastY = 0;
    const handleScroll = (): void => {
      const windowY = window.scrollY;
      console.log(`windowY: ${windowY}, lastY: ${lastY}`);
      const isScrollingUp = windowY < lastY;
      showNavSet(isScrollingUp);
      lastY = windowY; // lastY在最後一行才被賦予新的數值，所以在這行之前的lasyY都是上一個數值
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <motion.nav
        initial={{ background: "rgba(0, 0, 0, 0.5)" }}
        animate={{ background: `rgba(0, 0, 0, ${showNav ? "0.5" : "0"})` }}
        transition={{ duration: 0.5 }}
        className="fixed z-20 w-full px-4 py-4"
      >
        <Link to="/" className="block w-max">
          <img src={logoPath} alt="logo" className="w-20" />
        </Link>
      </motion.nav>
      <Outlet />
    </>
  );
};

export default Nav;
