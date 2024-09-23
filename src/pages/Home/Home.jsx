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

const Home = () => {
  return (
    <>
      <div className="lg:container sm:mx-auto lg:mx-auto lg:px-14 sm:px-5 flex md:flex-row md:items-center sm:flex-row justify-between items-start bg-[#2b2b2ba0] py-4">
        <div className="flex flex-col sm:gap-1  md:gap-2 lg:py-9 sm:py-6  sm:items-start">
          <div className="lg:text-5xl md:text-5xl sm:text-2xl ">Hello, I'm</div>
          <div className="lg:text-5xl md:text-5xl sm:text-2xl text-[#00a94f] font-semibold">
            Md Akbar Hossan
          </div>

          <div className="lg:text-3xl md:text-2xl sm:text-lg font-medium">
            Web Developer with MERN Stack
          </div>
          <div className="paragraph text-slate-300 hover:z-50">
            I have been working with Mern Stack for the past two years. <br />{" "}
            And follow to build the application MVC Pattern architecture
            <br /> using React JS, Node JS, Express JS, and MongoDB.
          </div>
          <div className="flex md:gap-3 sm:gap-2 mt-2 justify-center items-center">
            <a
              href="./AkbarHossanCV.pdf"
              download
              className=" w-fit h-10 px-4 py-2  defaultButton"
            >
              Download CV
            </a>
            <Link
              to="https://www.facebook.com/samrat.akbar.9883"
              className="linkStyle"
            >
              <img src={facaebook} alt="fb" className="socialMediaIcon" />
            </Link>
            <Link className="linkStyle" to="https://github.com/MdAkbar05">
              <img src={github} alt="github" className="socialMediaIcon" />
            </Link>
            <Link
              className="linkStyle"
              to="https://www.instagram.com/mdakbarhossansamrat/"
            >
              <img src={instagram} alt="insta" className="socialMediaIcon" />
            </Link>
            <Link className="linkStyle" to="https://github.com/MdAkbar05">
              <img src={linkedin} alt="linkedin" className="socialMediaIcon" />
            </Link>
          </div>
        </div>

        <div className="md:relative sm:absolute sm:top-[124px] sm:right-0  md:top-0 md:pb-4 ">
          <div className="z-50 sm:w-40 md:w-60 lg:w-72 hover:scale-105 transition-transform">
            <img
              className="img w-full"
              src={profile}
              alt="Profile"
              width={100}
              height={100}
            />
          </div>
          <div className="-z-[1] absolute sm:w-44 sm:top-12 sm:right-16  md:top-24  md:right-24 md:w-60  lg:w-[305px]">
            <img
              className="w-full"
              src={symbol}
              alt="smybol"
              width={100}
              height={100}
            />
          </div>
          <a
            href="#contact"
            className="z-50 absolute shadow-lg sm:bottom-0 sm:right-0 md:right-2 flexCenter rounded-3xl sm:w-40 md:w-56 lg:w-64 lg:right-4 lg:bottom-4 backdrop-blur-sm border py-2 sm:text-sm md:text-base "
          >
            <span className="sm:px-2 md:px-4 md:py-1 bg-green-500 rounded-full">
              Protfolio
            </span>
            <span className="sm:px-2 md:px-4 md:py-1  rounded-full">
              Hire me
            </span>
          </a>
        </div>
      </div>
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
