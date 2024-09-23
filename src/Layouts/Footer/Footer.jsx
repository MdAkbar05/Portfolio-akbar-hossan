import React from "react";
import { Container, Stack } from "@mui/material";
// import "./Footer.css";

import {
  FacebookRounded,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import logo from "./../../assets/img/logo.png";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcCall from "@mui/icons-material/AddIcCall";
import Mail from "@mui/icons-material/Mail";
import Facebook from "@mui/icons-material/FacebookOutlined";
import { Fade } from "react-reveal";
const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send email, store data, etc.)
  };
  return (
    <>
      <div
        id="footer"
        className="mt-4 lg:container lg:mx-auto  bg-[#2b2b2ba0] lg:px-14 py-4"
      >
        <Fade left>
          <div className="sm:text-2xl text-center md:py-8 md:text-4xl font-semibold">
            Stay in <span className="text-green-500">Touch</span>
          </div>
        </Fade>
        <div className="flex sm:px-6 sm sm:flex-col sm:justify-center sm:flex-wrap md:flex  md:flex-row md:justify-between items-start   ">
          {/* first row  */}
          <div className="leftIfno sm:py-4 md:py-0 flex md:flex-col justify-center gap-2 sm:flex sm:mx-auto md:w-4/12 sm:w-full sm:justify-between">
            <div className="flex flex-col md:gap-4">
              <div className="sm:max-w-16 sm:max-h-12 my-auto">
                <Link to="/" className="">
                  <img className="w-full h-full " src={logo} alt="Brand" />
                </Link>
              </div>
              <div className="Follow text-lg">
                <h3 className="text-green-500">Follow-us</h3>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="flex-end"
                  className="contacts"
                >
                  <Link to="https://www.facebook.com/samrat.akbar.9883">
                    <FacebookRounded
                      className="fb"
                      sx={{ fontSize: 32, color: "#7e9eb7" }}
                    />
                  </Link>
                  <Link to="https://github.com/MdAkbar05">
                    <GitHub
                      className="gh"
                      sx={{ fontSize: 30, color: "#7e9eb7" }}
                    />
                  </Link>
                  <Link to="https://www.instagram.com/mdakbarhossansamrat/">
                    <Instagram
                      className="inst"
                      sx={{ fontSize: 30, color: "#7e9eb7" }}
                    />
                  </Link>
                  <Link to="https://github.com/MdAkbar05">
                    <LinkedIn
                      className="lkn"
                      sx={{ fontSize: 32, color: "#7e9eb7" }}
                    />
                  </Link>
                </Stack>
              </div>
            </div>
            <ul className="Services font-light ">
              <div className="text-green-500">Quick-Link</div>
              <li>
                <a href="#skill">Skill</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* Second Row  */}
          <div className="footer md:w-4/12">
            <ul className="flex flex-col gap-4 mb-8 text-gray-300">
              <h3 className="text-lg text-green-500">Contact Info</h3>
              <li className="">
                <LocationOnIcon className="contact-icon" />{" "}
                <span className="ml-2">Agrabad,Chittagong,Bangladesh</span>
              </li>
              <li>
                <AddIcCall className="contact-icon" />
                <span className="ml-2">+8801879808105 or +8801763892682</span>
              </li>
              <li>
                <Mail className="contact-icon" />
                <span className="ml-2">samratakbar667466@gmail.com</span>
              </li>
            </ul>
          </div>
          {/* Third Row  */}
          <div className="fabout md:w-4/12">
            <div className="about-us">
              <h3 className="text-lg text-green-500">About Me!</h3>
              <p className="text-gray-300">
                I am a dedicated backend developer in training. To enhance my
                skills and gain real-world experience, I have been learning the
                MERN stack, which allows me to create full-stack applications
                using JavaScript. If you are interested in learning more about
                me, feel free to explore my website.
              </p>
            </div>
          </div>
        </div>
        {/* Copy right text  */}
        <p className="text-center font-thin sm:pb-10 md:pb-0">
          Copyright © 2024 Telepathist-Samrat. All rights reserved{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
