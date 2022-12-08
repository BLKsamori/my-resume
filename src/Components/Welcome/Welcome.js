import "./Welcome.css";
import { useContext } from "react";
import PortfolioContext from "../../Contexts/PortfolioContext/PortfolioContext";
import React from "react";

function Welcome() {
  const portfolio = useContext(PortfolioContext);
  const home = portfolio.home;
  // calculate the Title that i have
  const currentTitle = portfolio.closesItem(home.titles).title;

  return (
    <div className="Welcome">
      <h1>
        <span>{home.welcomeGreeting}</span>

        <br />

        <span>{home.welcomeTitle.replace("[title]", currentTitle)}</span>
      </h1>

      <p>{home.welcomeParagraph}</p>
    </div>
  );
}

export default Welcome;
