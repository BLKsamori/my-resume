import "./PrintIcon.css";
import { useContext } from "react";
import ThemeContext from "../../../Contexts/ThemeContext/ThemeContext";
import ACTION_THEME from "../../../Contexts/ThemeContext/ACTION_THEME";
import React from "react";

function PrintIcon() {
  const setTheme = useContext(ThemeContext);

  return (
    <div className="PrintIcon" id="print_check">
      <input
        onChange={() => setTheme({ type: ACTION_THEME.PRINT })}
        type="checkbox"
        id="PrintIcon"
      />

      <label className="PrintIconWrapper" htmlFor="PrintIcon">
        <div></div>
        <div></div>
        <div></div>
      </label>

      <p>Color</p>
    </div>
  );
}

export default PrintIcon;
