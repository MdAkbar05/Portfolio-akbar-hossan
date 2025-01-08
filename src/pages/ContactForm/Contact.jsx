import React, { useRef, useState } from "react";
import { Fade, Zoom } from "react-reveal";
import emailjs from "@emailjs/browser";
import Dialogs from "../../components/Dialog/Dialogs";
// Material UI
import { Container } from "@mui/material";
import HelmetPage from "../../components/Helmet/Helmet";

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_bsofnsk",
        "template_jsn7k4o",
        e.target,
        "YYUEj3Vu4X1dPQkJs"
      )
      .then(
        (result) => {
          if (result.text == "OK") {
            setIsSuccess(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.preventDefault();
  };

  return (
    <>
      <HelmetPage
        title="MD. Akbar Hossan | Web Developer with MERN Stack | Contact for me 01879808105"
        desc="To contact with akbar, send email and get response within few hours"
        link="https://akbar-hossan05.netlify.app/"
      />
      <React.Fragment>
        <div
          className="mt-4 lg:container lg:mx-auto  bg-[#2b2b2ba0] lg:px-14 py-4"
          id="contact"
        >
          <Fade left></Fade>
          {/* University Education Details */}
          <div className="contactFrom ">
            <h1
              className="center"
              content="projects akbar hossan mern stack web developer"
            >
              <span className="sm:text-2xl text-center md:py-8 md:text-4xl font-semibold md:w-[450px]">
                Have an Awsome Project Idea?{" "}
              </span>
            </h1>
            <Zoom>
              <form
                className="flex flex-col justify-center items-center md:py-8 md:px-4 sm:px-4"
                onSubmit={sendEmail}
                ref={form}
                name="contact"
                netlify
              >
                <div className="flex flex-col gap-y-3 justify-center items-center">
                  <p className="text-base font-normal text-green-500">
                    Contact Us
                  </p>
                  <h2 className="md:text-3xl font-bold">Get in touch</h2>
                  <p className="text-base font-normal ">
                    We love to hear from you.please fill out this form.
                  </p>
                </div>
                <div className="flex flex-col gap-y-6  md:p-6 md:px-2 sm:p-4 rounded-lg shadow-xl ">
                  <div className="flex md:flex-row sm:flex-col  gap-x-6">
                    <div className="p-3 border-b-2 border-green-500">
                      <input
                        className="focus:outline-none max-w-32"
                        placeholder="Name"
                        required
                        id="name"
                        type="text"
                        name="user_name"
                      />
                    </div>
                    <div className="p-3 border-b-2 border-green-500">
                      <input
                        className="focus:outline-none "
                        placeholder="Email"
                        id="email"
                        name="user_email"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="p-3 border-b-2 border-green-500">
                    <textarea
                      name="message"
                      id="message"
                      rows="3"
                      className="focus:outline-none w-full"
                      placeholder="Message"
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-full  py-2 px-2 defaultButton text-center ">
                    <input
                      className={`${
                        isSuccess ? `cursor-not-allowed` : `cursor-pointer`
                      }`}
                      value={
                        isSuccess ? "Message sent successfully" : "Send Message"
                      }
                      id="submit"
                      type="submit"
                    />
                  </div>
                </div>
              </form>
            </Zoom>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default Contact;
