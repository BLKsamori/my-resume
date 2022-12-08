import "./Main.css";
import Home from "../../../Pages/Home/Home";
import Projects from "../../../Pages/Projects/Projects";
import About from "../../../Pages/About/About";
import Contact from "../../../Pages/Contact/Contact";
import React from "react";

function Main() {
  return (
    <div className="Main">
      <Home />
      <hr />
      <Projects />
      <hr />
      <About />
      <hr />
      <Contact />
    </div>
  );
}

export default Main;
