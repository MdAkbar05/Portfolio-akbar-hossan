import React, { useEffect, useState } from "react";
import "./project.css";
import { Container } from "@mui/material";
import { Fade } from "react-reveal";
import { projectdata } from "./projectData";

const Project = () => {
  const [projects, setProjects] = useState(projectdata); // Keep the original projectdata
  const [activeRecent, setActiveRecent] = useState(false);
  const [activeAZ, setActiveAZ] = useState(false);
  const [activeGraphics, setActiveGraphics] = useState(false);
  const [activeWeb, setActiveWeb] = useState(false);

  const sortProjects = (sortBy) => {
    let sortedProjects = [...projectdata]; // Always start with the full dataset

    if (sortBy === "A-Z") {
      sortedProjects.sort((a, b) => a.title.localeCompare(b.title));
      setActiveAZ(true);
      setActiveRecent(false);
      setActiveGraphics(false);
      setActiveWeb(false);
    } else if (sortBy === "Recents") {
      sortedProjects.sort((a, b) => b.id - a.id);
      setActiveAZ(false);
      setActiveRecent(true);
      setActiveGraphics(false);
      setActiveWeb(false);
    } else if (sortBy === "Graphics") {
      sortedProjects = projectdata.filter(
        (project) =>
          project.lan.includes("Adobe") || project.lan.includes("Illustrator")
      );
      setActiveAZ(false);
      setActiveRecent(false);
      setActiveGraphics(true);
      setActiveWeb(false);
    } else if (sortBy === "Web") {
      sortedProjects = projectdata.filter((project) =>
        project.lan.includes("ReactJS")
      );
      setActiveAZ(false);
      setActiveRecent(false);
      setActiveGraphics(false);
      setActiveWeb(true);
    }

    setProjects(sortedProjects);
  };

  useEffect(() => {
    sortProjects("Recents");
  }, []);

  return (
    <div className="mt-4 lg:container lg:mx-auto bg-[#2b2b2ba0] lg:px-14 py-4">
      <Fade left>
        <div className="sm:text-2xl text-center md:py-8 md:text-4xl font-semibold">
          Lets have a look at my{" "}
          <span className="text-green-500">Projects</span>
        </div>
      </Fade>

      {/* Sorting bar */}
      <div className="flexCenter py-2 sm:gap-4">
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <div className="">Sort by:</div>
          <div
            className={
              activeRecent
                ? "py-1 px-3 rounded-full cursor-pointer hover:bg-red-500 transition-colors bg-red-600"
                : "py-1 px-3 bg-[#313030] rounded-full cursor-pointer hover:text-green-500 transition-colors"
            }
            onClick={() => sortProjects("Recents")}
          >
            Recents
          </div>
          <div
            className={
              activeAZ
                ? "py-1 px-3 rounded-full cursor-pointer hover:bg-red-500 transition-colors bg-red-600"
                : "py-1 px-3 bg-[#313030] rounded-full cursor-pointer hover:text-green-500 transition-colors"
            }
            onClick={() => sortProjects("A-Z")}
          >
            A-Z
          </div>
          <div
            className={
              activeGraphics
                ? "py-1 px-3 rounded-full cursor-pointer hover:bg-red-500 transition-colors bg-red-600"
                : "py-1 px-3 bg-[#313030] rounded-full cursor-pointer hover:text-green-500 transition-colors"
            }
            onClick={() => sortProjects("Graphics")}
          >
            Graphics
          </div>
          <div
            className={
              activeWeb
                ? "py-1 px-3 rounded-full cursor-pointer hover:bg-red-500 transition-colors bg-red-600"
                : "py-1 px-3 bg-[#313030] rounded-full cursor-pointer hover:text-green-500 transition-colors"
            }
            onClick={() => sortProjects("Web")}
          >
            Web Projects (MERN)
          </div>
        </div>
      </div>

      {/* Project cards */}
      <div className="flex items-center sm:justify-center py-4 flex-wrap sm:gap-2 md:gap-10 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="overflow-hidden flex flex-col items-center justify-center bg-black p-3 rounded-md sm:w-40 md:w-72 sm:h-56 md:h-fit shadow-sm shadow-green-500 hover:shadow-white transition-all duration-500 "
          >
            <div className="md:w-64 md:h-52 sm:w-32 sm:h-24 sm:mx-auto rounded-lg overflow-hidden hover:scale-105 cursor-pointer transition-transform border-[1px]">
              <img
                className="inset-0 w-full h-full object-cover"
                src={project.img}
                alt="Image"
              />
            </div>
            <div className="sm:text-sm sm:font-normal text-center font-medium py-1">
              {project.title}
            </div>
            <div className="font-thin">{project.lan.join("-")}</div>
            <a
              className="liveLinkButton sm:px-2 md:px-6 py-1"
              href={project.link}
              target="_blank"
            >
              {project.btn ? project.btn : "Live Preview"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
