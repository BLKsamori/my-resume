import "./SkillCard.css";
import React from "react";

function SkillCard({ skill }) {
  return (
    <li className="SkillCard">
      <h6>{skill.name}</h6>
      <img {...skill.pic} />
    </li>
  );
}

export default SkillCard;
