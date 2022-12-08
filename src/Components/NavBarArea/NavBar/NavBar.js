import "./NavBar.css";
import NavBtn from "../NavBtn/NavBtn";
import { useContext } from "react";
import PortfolioContext from "../../../Contexts/PortfolioContext/PortfolioContext";
import React from "react";

function NavBar() {
  const NavBarPages = useContext(PortfolioContext).NavBar.pages;
  // const NavBar = portfolio.NavBar;

  return (
    <div className="NavBar">
      {NavBarPages.map((barObj) => (
        <NavBtn navItem={barObj} key={"nav" + barObj} />
      ))}
    </div>
  );
}

export default NavBar;
