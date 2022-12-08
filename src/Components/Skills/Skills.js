import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard";
import { useContext } from "react";
import PortfolioContext from "../../Contexts/PortfolioContext/PortfolioContext";
import React from "react";

function Skills() {
  const Portfolio = useContext(PortfolioContext);
  const Skills = Portfolio.skills;
  // calculate the Skills that i've earned
  const currentSkills = Portfolio.pastValidator(Skills.skillsList);

  return (
    <div className="Skills">
      <h2> {Skills.skillsHeader} </h2>

      <ul className="skillsList">
        {currentSkills.map((skillObj) => (
          <SkillCard skill={skillObj} key={skillObj.id} />
        ))}
      </ul>
    </div>
  );
}

export default Skills;
