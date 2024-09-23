import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

import { Home, EmojiEvents, Web, Info } from "@mui/icons-material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <>
      <div className="navbar-container">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <Link
            className={url == "/skills" ? "nav-item active" : "nav-item"}
            to="/skills"
            onClick={closeMobileMenu}
          >
            <EmojiEvents />
            Skills
          </Link>
          <Link
            className={url == "/projects" ? "nav-item active" : "nav-item"}
            to="/projects"
            onClick={closeMobileMenu}
          >
            <Web />
            Projects
          </Link>
          <Link
            className={url == "/" ? "nav-item active" : "nav-item"}
            to="/"
            onClick={closeMobileMenu}
          >
            <Home />
            Home
          </Link>
          <Link
            className={url == "/services" ? "nav-item active" : "nav-item"}
            to="/services"
            onClick={closeMobileMenu}
          >
            <ManageAccountsIcon />
            Services
          </Link>
          <Link
            className={url == "/abouts" ? "nav-item active" : "nav-item"}
            to="/abouts"
            onClick={closeMobileMenu}
          >
            <Info />
            Abouts
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
