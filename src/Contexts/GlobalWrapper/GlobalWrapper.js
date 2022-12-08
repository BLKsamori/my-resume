import "./GlobalWrapper.css";
import { useReducer } from "react";
import ThemeContext from "../ThemeContext/ThemeContext";
import PortfolioContext from "../PortfolioContext/PortfolioContext";
import ThemeReducer from "../ThemeContext/ThemeReducer";
import portfolio from "../../Services/Details";
import Layout from "../../Components/LayoutArea/Layout/Layout";
import React from "react";

function GlobalWrapper() {
  // themes switcher
  const defaultTheme = { primary: "dark", print: "" };
  const [theme, setTheme] = useReducer(ThemeReducer, defaultTheme);

  return (
    <PortfolioContext.Provider value={portfolio}>
      <ThemeContext.Provider value={(theme, setTheme)}>
        <div
          className="GlobalWrapper"
          id={theme.print == "" ? theme.primary : theme.print}
        >
          <Layout />
        </div>
      </ThemeContext.Provider>
    </PortfolioContext.Provider>
  );
}

export default GlobalWrapper;
