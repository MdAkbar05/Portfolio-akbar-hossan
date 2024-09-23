import React from "react";
import { Fade } from "react-reveal";
import ServiceCard from "../../components/ServicesCard";

import WebDesign from "../../assets/img/services/WebDesign.jpg";
import WebApplication from "../../assets/img/services/Web_Application.jpg";
import WebDeveloper from "../../assets/img/services/Web_Development.jpg";
import ProjectManage from "../../assets/img/services/ProjectManagement.jpg";

const Services = () => {
  return (
    <div className="mt-4 lg:container lg:mx-auto  bg-[#2b2b2ba0] lg:px-14 py-4">
      <Fade left>
        <div className="sm:text-2xl sm:text-center md:text-center md:py-8 md:text-4xl font-semibold">
          Provide <span className="text-green-500">Services</span>
        </div>
        <div className="servicesGroup flex md:justify-center items-center sm:justify-center py-4 flex-wrap sm:gap-8 md:gap-10">
          <ServiceCard name="Web Delopment" img={WebDeveloper} />
          <ServiceCard name="Web Application" img={WebApplication} />
          <ServiceCard name="Web Design" img={WebDesign} />
          <ServiceCard name="Project Management" img={ProjectManage} />
        </div>
      </Fade>
    </div>
  );
};

export default Services;
