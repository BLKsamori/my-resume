import "./About.css";
import Skills from "../../Components/Skills/Skills.js";
import BgC from "../../Components/Bgs/BgC/BgC";
import { useContext } from "react";
import PortfolioContext from "../../Contexts/PortfolioContext/PortfolioContext";
import React from "react";

function About() {
  const about = useContext(PortfolioContext).about;

  return (
    <div className="About" id="about">
      <BgC />
      <Skills />

      <div className="aboutSection">
        <h2>Little about me..</h2>
        <p>{about}</p>
      </div>
    </div>
  );
}

export default About;
