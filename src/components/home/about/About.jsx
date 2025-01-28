import React from "react";
import AboutInfo from "./AboutInfo";
import "./About.css";
import AboutImage from "./Aboutimage";

function About() {
  return (
    <div className="about-container">
      <AboutInfo />
      <AboutImage />
    </div>
  );
}

export default About;
