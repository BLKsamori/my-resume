import "./Projects.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard.js";
import BgB from "../../Components/Bgs/BgB/BgB";
import { useContext } from "react";
import PortfolioContext from "../../Contexts/PortfolioContext/PortfolioContext";
import React from "react";

function Projects() {
  const projects = useContext(PortfolioContext).projects;

  return (
    <div className="Projects" id="my_work">
      <BgB />
      <h2>{projects.projectsHeader}</h2>

      <ul className="allProjects">
        {projects.projectsList.map((projectObj) => (
          <ProjectCard key={projectObj.id} project={projectObj} />
        ))}
      </ul>
    </div>
  );
}

export default Projects;
