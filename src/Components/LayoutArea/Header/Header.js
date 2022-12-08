import "./Header.css";
import ThemeToggle from "../../NavBarArea/ThemeToggle/ThemeToggle";
import NavBar from "../../NavBarArea/NavBar/NavBar";
import PrintIcon from "../../NavBarArea/PrintIcon/PrintIcon";
import React from "react";

function Header() {
  return (
    <div className="Header">
      <PrintIcon />

      <div className="headerEnd">
        <NavBar />
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
