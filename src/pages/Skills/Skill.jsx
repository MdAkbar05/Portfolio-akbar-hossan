import { Fade, Zoom } from "react-reveal";

import TypeScript from "../../assets/img/icon-typescript.svg";
import NextJs from "../../assets/img/icon-nextjs.svg";
import Skills from "../../assets/img/skill.png";
import ReactJS from "./img/ReactJS.png";
import NodeJS from "../../assets/img/icon-nodejs.svg";
import ExpressJS from "../../assets/img/icon-express.svg";
import Socket from "../../assets/img/icon-socket.svg";
import SCSS from "../../assets/img/icon-sass.svg";
import MongoDB from "../../assets/img/icon-mongodb.svg";
import Tailwind from "../../assets/img/icon-tailwindcss.svg";
import JS from "./img/Javascript.png";
import Git from "../../assets/img/icon-git.svg";
import SkillItem from "../../components/SkillCard";
import Table from "../../components/Table";

const Skill = () => {
  return (
    <>
      <div className=" mt-4 lg:container lg:mx-auto flex flex-col gap-4 bg-[#2b2b2ba0] lg:px-14 py-4">
        <Fade left>
          <div className="topSide flex justify-between items-center  topSideSm sm:flex-col sm:justify-center sm:items-center topSideMd topSideLg lg:gap-2 lg:flex-row">
            <div className="flex flex-col sm:justify-center sm:items-center md:justify-start md:items-start gap-6 sm:px-4">
              <div className="sm:text-2xl md:text-4xl font-semibold">
                Professional <span className="text-green-500">Skills</span>
              </div>
              <div className="font-medium">
                The skills, tools and technologies I am really good at:
              </div>
              <div className="flex gap-2 flex-wrap sm:justify-center md:justify-start">
                <Table
                  head="Languages"
                  data="JavaScripts TypeScripts PHP Node JS"
                />
                <Table head="Databases" data="MongoDB MySQL Oracle" />
                <Table
                  head="Others"
                  data="HTML CSS Bootstrap Tailwind CSS JSON"
                />
                <Table head="Frameworks" data="React NextJs ExpressJs" />
                <Table
                  head="Tools"
                  data="Git Github Prompt Eng. Adobe Netlify"
                />
              </div>
            </div>
            <div className="sm:max-w-52 sm:py-10 lg:p-10 lg:max-w-96">
              <img src={Skills} alt="Skills" />
            </div>
          </div>
          <div className="bottomSide flex flex-wrap justify-center  bottomSideSm sm:gap-7 sm:p-[2px] bottomSideMd md:gap-12 bottomSideLg">
            <Fade>
              <SkillItem src={JS} name="JavaScript" />
              <SkillItem src={TypeScript} name="TypeScript" />
              <SkillItem src={ReactJS} name="React Js" />
              <SkillItem src={NextJs} name="Next Js" />
              <SkillItem src={NodeJS} name="Node Js" />
              <SkillItem src={ExpressJS} name="Express JS" />
              <SkillItem src={Socket} name="Socket IO" />
              <SkillItem src={MongoDB} name="MongoDB" />
              <SkillItem src={SCSS} name="Sass/Scss" />
              <SkillItem src={Tailwind} name="Tailwind" />
              <SkillItem src={Git} name="Git" />
            </Fade>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Skill;
