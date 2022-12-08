import "./Home.css";
import Welcome from "../../Components/Welcome/Welcome.js";
import Portrait from "../../Components/Portrait/Portrait.js";
import BgA from "../../Components/Bgs/BgA/BgA";
import { useContext } from "react";
import PortfolioContext from "../../Contexts/PortfolioContext/PortfolioContext";
import React from "react";

function Home() {
  const home = useContext(PortfolioContext).home;

  return (
    <div className="Home" id="home">
      <div className="homeMiddle">
        <Welcome />
        <Portrait myPic={home.myPortrait} />
      </div>

      <a href="#my_work">
        <button>{home.homeBtnText}</button>
      </a>
      <BgA />
    </div>
  );
}

export default Home;
