import "./ProjectCard.css";
import React from "react";

function ProjectCard({ project }) {
  return (
    <li className="ProjectCard">
      <div className="ProjectCardHeader">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>

      <div className="ProjectCardFooter">
        {/* for showing the visit link */}
        {!project.UnderMaintenance && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        )}
        {project.pics?.map((pic) => (
          <img {...pic} key={pic.alt} />
        ))}
      </div>
    </li>
  );
}

export default ProjectCard;
