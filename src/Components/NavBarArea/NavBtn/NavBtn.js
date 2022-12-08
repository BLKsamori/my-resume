import "./NavBtn.css";
import React from "react";

function NavBtn({ navItem }) {
  // word or sentence to capital fro "my work"
  const wordToCapitalize = navItem
    .toLowerCase()
    .split("_")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");

  return (
    <a className="NavBtn" href={`#${navItem}`}>
      {/* <a  href={`#${navItem}`}> */}

      {wordToCapitalize}
    </a>
  );
}

export default NavBtn;
