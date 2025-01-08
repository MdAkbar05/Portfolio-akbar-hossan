import React from "react";
import { Link, useLocation } from "react-router-dom";
import facaebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import github from "../../assets/img/github.png";
import linkedin from "../../assets/img/linkedin.png";
import symbol from "../../assets/img/symbol.png";
import profile from "../../assets/img/ProfileOfAkbar.png";
import profile2 from "../../assets/img/ProfileOfAkbar2.png";

const HomePage = () => {
  // when screen size less than 560px then  setMobileImage to true
  const [mobileImage, setMobileImage] = React.useState(window.innerWidth < 620);
  // when screen size changes then update mobileImage state
  React.useEffect(() => {
    const handleResize = () => {
      setMobileImage(window.innerWidth < 560);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(mobileImage);

  return (
    <>
      <div className="lg:container sm:mx-auto lg:mx-auto lg:px-14 sm:px-5 flex md:flex-row md:items-center sm:flex-row justify-between items-start bg-[#2b2b2ba0] py-4">
        <div className="flex flex-col sm:gap-1  md:gap-2 lg:py-9 sm:py-6  sm:items-start">
          <p className="lg:text-5xl md:text-5xl sm:text-2xl ">Hello, I'm</p>
          <h1 className="lg:text-5xl md:text-5xl sm:text-2xl text-[#00a94f] font-semibold">
            Md Akbar Hossan
          </h1>

          <h2 className="lg:text-3xl md:text-2xl sm:text-lg font-medium">
            Web Developer with MERN Stack
          </h2>
          <p className="paragraph text-slate-300 hover:z-50">
            I have been working with Mern Stack for the past two years. <br />{" "}
            And follow to build the application MVC Pattern architecture
            <br /> using React JS, Node JS, Express JS, and MongoDB.
          </p>
          <div className="flex md:gap-3 sm:gap-2 mt-2 justify-center items-center">
            <a
              href="./AkbarHossanCV.pdf"
              download
              className=" w-fit h-10 px-4 py-2  defaultButton"
            >
              Download CV
            </a>
            <Link
              to="https://www.facebook.com/akbarhossan05"
              className="linkStyle"
              aria-label="My Facebook profile"
            >
              <img
                src={facaebook}
                alt="facebook"
                className="socialMediaIcon2"
              />
            </Link>
            <Link
              className="linkStyle"
              to="https://github.com/MdAkbar05"
              aria-label="My Github profile"
            >
              <img src={github} alt="github" className="socialMediaIcon" />
            </Link>
            <Link
              className="linkStyle"
              to="https://www.instagram.com/akbarhossan05"
              aria-label="My Instagram profile"
            >
              <img src={instagram} alt="insta" className="socialMediaIcon" />
            </Link>
            <Link
              className="linkStyle"
              to="https://www.linkedin.com/akbarhossan05"
              aria-label="My Linkedin profile"
            >
              <img src={linkedin} alt="linkedin" className="socialMediaIcon" />
            </Link>
          </div>
        </div>

        <div className="md:relative sm:absolute sm:top-[124px] sm:right-0  md:top-0 md:pb-4 ">
          <div className="z-50 sm:w-40 md:w-60 lg:w-72 hover:scale-105 transition-transform">
            <img
              className="img w-full"
              src={mobileImage ? profile2 : profile}
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
            <span className="sm:px-2 md:px-4 md:py-2 bg-green-500 hover:bg-transparent transition-all rounded-full">
              Protfolio
            </span>
            <span className="sm:px-2 md:px-4 md:py-2 hover:bg-green-500 transition-all  rounded-full">
              Hire me
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
