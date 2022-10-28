import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import logoPath from "../assets/LOGO.png";
interface NavContext {
  showNav: boolean;
}

const Nav = (): JSX.Element => {
  const [showNav, showNavSet] = useState(true);
  useEffect(() => {
    let lastY = 0;
    const handleScroll = (): void => {
      const windowY = window.scrollY;
      // console.log(`windowY: ${windowY}, lastY: ${lastY}`);
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
      <motion.nav className="fixed z-20 flex w-full items-center px-4 py-4 text-lg font-bold text-primary">
        <Link to="/" className="block w-max">
          <img src={logoPath} alt="logo" className="w-20" />
        </Link>

        <motion.ul
          initial={{ opacity: 1 }}
          animate={{
            opacity: showNav ? 1 : 0,
            pointerEvents: showNav ? "auto" : "none",
          }}
          transition={{ duration: 0.3 }}
          className="ml-10"
        >
          <li>
            <Link to="/blog">活動紀錄</Link>
          </li>
        </motion.ul>
      </motion.nav>
      <Outlet context={{ showNav }} />
    </>
  );
};

export function useNav(): NavContext {
  return useOutletContext<NavContext>();
}

export default Nav;
