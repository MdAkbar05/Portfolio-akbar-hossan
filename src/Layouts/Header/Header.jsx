import React, { useEffect, useState } from "react";
import { ImMenu } from "react-icons/im";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "./../../assets/img/logo.png";
import Navbar from "./Navbar";
import ViewCounter from "../../components/Views/ViewCounter";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <>
      <div className="sm:max-w-full sm:bg-[#35353520]  mx-auto  sm:px-4 lg:px-44 container sticky top-0  backdrop-blur-xl bg-[#00000041]  border-b-[0.5px] border-green-700 z-50 font-serif ">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="sm:size-14 lg:size-16 flex justify-center  items-center"
          >
            <img src={logo} alt="Brand" />
          </Link>
          <ul className="sm:hidden md:flex items-center justify-center gap-9 bg-[#1e1e1e] py-4 px-5 rounded-[15px]  md:py-2 md:text-sm text-lg relative">
            <li className={url == "/" ? "navBtn active" : "navBtn"}>
              <Link to="/">Home</Link>
            </li>
            <li className={url == "/projects" ? "navBtn active" : "navBtn"}>
              <Link to="/projects">Projects</Link>
            </li>
            <li className={url == "/skills" ? "navBtn active" : "navBtn"}>
              <Link to="/skills">Skills</Link>
            </li>
            <li className={url == "/services" ? "navBtn active" : "navBtn"}>
              <Link to="/services">Services</Link>
            </li>
            <li className={url == "/abouts" ? "navBtn active" : "navBtn"}>
              <Link to="/educations">Educations</Link>
            </li>
          </ul>
          <ViewCounter />
          <div className="px-5 py-2 defaultButtonReverse">
            <a href="/contacts">Contacts</a>
          </div>
        </div>

        {/* Dropdown Menu  */}
      </div>
      <Navbar />
    </>
  );
};

export default Header;
