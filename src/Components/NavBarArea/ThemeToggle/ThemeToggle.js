import "./ThemeToggle.css";
import { useContext } from "react";
import ThemeContext from "../../../Contexts/ThemeContext/ThemeContext";
import ACTION_THEME from "../../../Contexts/ThemeContext/ACTION_THEME";
import PortfolioContext from "../../../Contexts/PortfolioContext/PortfolioContext";
import React from "react";

function ThemeToggle() {
  const setTheme = useContext(ThemeContext);
  const toggleIcons = useContext(PortfolioContext).NavBar.toggleIcons;

  return (
    <div className="ThemeToggle">
      <input
        type="checkbox"
        onChange={() => setTheme({ type: ACTION_THEME.PRIMARY })}
        id="ThemeSwitch"
      ></input>

      <label className="ThemeToggleWrapper" htmlFor="ThemeSwitch">
        <div className="Moon">
          <img {...toggleIcons.Moon} />
        </div>

        <div className="Sun">
          <img {...toggleIcons.Sun} />
        </div>
      </label>
    </div>
  );
}

export default ThemeToggle;
