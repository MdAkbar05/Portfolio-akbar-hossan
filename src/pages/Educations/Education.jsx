import React, { useState } from "react";
import "./Education.css";
import { Fade, Zoom } from "react-reveal";
import Educations from "./img/EducationsStudent.png";

import Dialogs from "../../components/Dialog/Dialogs";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const Education = () => {
  const [dialog, setDialog] = useState("null");
  const [openBtn, setOpenBtn] = useState(false);

  const handleSSC = () => {
    setDialog("ssc");
    setOpenBtn(true);
  };
  const handleCSE = () => {
    setDialog("CSE");
    setOpenBtn(true);
  };
  return (
    <>
      <React.Fragment>
        <div className="mt-4 lg:container lg:mx-auto  bg-[#2b2b2ba0] lg:px-14 py-4 pb-32">
          <Fade left>
            <h1 className="center">
              <span className="sm:text-2xl text-center md:py-8 md:text-4xl font-semibold">
                Education <span className="text-green-500">Qualifications</span>
              </span>
            </h1>
          </Fade>
          {/* University Education Details */}
          <div className="flex md:justify-around sm:flex-col md:flex-row gap-4 items-center">
            <img
              src={Educations}
              className="md:w-[432px] sm:w-72"
              alt="Educations"
            />

            <div className="bg-[#1e1e1e] flex flex-col rounded-xl py-4 px-6 sm:mx-12 md:mx-0">
              <Zoom>
                <div
                  onClick={handleSSC}
                  className="py-4  px-1 justify-start items-center rounded-full flex text-green-500 cursor-pointer"
                >
                  <CheckCircleRoundedIcon style={{ marginRight: "10px" }} />
                  <span className="text-white">
                    Secondary School Certificates | 2020
                  </span>
                </div>
                <div
                  className="py-4 justify-start items-center px-1 rounded-full flex text-green-500 cursor-pointer "
                  onClick={handleCSE}
                >
                  <CheckCircleRoundedIcon style={{ marginRight: "10px" }} />{" "}
                  <span className="text-white">
                    Diploma in Computer Science & Engineering | 2024
                  </span>
                </div>
                <div className="py-4 px-1 justify-start items-center rounded-full flex cursor-pointer">
                  <CheckCircleRoundedIcon style={{ marginRight: "10px" }} />{" "}
                  <span className="text-white">BSC Engineering running...</span>
                </div>
              </Zoom>
              {dialog == "ssc" ? (
                <Dialogs
                  title="Secondary School Certificate Details"
                  desc="I started my secondary school certificate (SSC) on January 1st, 2018. My educational background was in science, and I was able to achieve a GPA of 3.87 on my final SSC exams. Throughout my studies, I excelled in many scientific subjects and found them to be particularly interesting. I successfully completed my SSC on February 22nd, 2020."
                  openBtn={openBtn}
                />
              ) : null}
              {dialog == "CSE" ? (
                <Dialogs
                  title="Computer Science & Engineering Details"
                  desc="I plan to start my course on September 1st, 2020, after my SSC exam. I have completed my diploma course and achieved a CGPA of 3.70. During the course, I learned many programming languages. Finally, I completed my Diploma in Computer Science and Engineering courses on September 1st, 2024."
                  openBtn={openBtn}
                />
              ) : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default Education;
