import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Stack, Container } from "@mui/material";

import Services from "../Services";
import profile from "../../assets/img/ProfileOfAkbar.png";
import Skill from "../Skills/Skill";
import Project from "../Projects/Project";
import Contact from "../ContactForm/Contact";
import Education from "../Educations/Education";

import facaebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import github from "../../assets/img/github.png";
import linkedin from "../../assets/img/linkedin.png";
import symbol from "../../assets/img/symbol.png";
import Testimonial from "../Testimonials";
import HomePage from "./HomePage";
import HelmetPage from "../../components/Helmet/Helmet";

const Home = () => {
  return (
    <>
      <HelmetPage
        title="Home Pages of MD. Akbar Hossan | Mern Stack Developer"
        desc="Hey Guys ! I'm MD. Akbar Hossan, Mern Stack Developer, work as frontend & backend development. I have done many skill such as ReactJS, Nodejs, ExpressJS, Redux Toolkit, mongodb etc."
        link="https://akbar-hossan05.netlify.app/"
      />
      <HomePage />
      <Skill />
      <Services />
      <Project />
      <Education />
      <Contact />
      <Testimonial />
    </>
  );
};

export default Home;
