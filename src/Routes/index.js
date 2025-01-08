import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Layouts/Header/Header";

import Footer from "../Layouts/Footer/Footer";
import Home from "../pages/Home/Home";
import Contact from "../pages/ContactForm/Contact";
import Project from "../pages/Projects/Project";
import Skill from "../pages/Skills/Skill";
import Error from "../pages/Error/Error";
import ScrollToTop from "../components/ScrollToTop";
import Services from "../pages/Services";
import Education from "../pages/Educations/Education";

const Index = () => {
  return (
    <BrowserRouter>
      {/* declare static Components here  */}
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/educations" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skill />} />

        <Route path="*" element={<Error />} />
      </Routes>
      {/* declare static Components here  */}
      <Footer />
    </BrowserRouter>
  );
};

export default Index;
