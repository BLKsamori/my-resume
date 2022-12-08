import "./Layout.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import React from "react";

function Layout() {
  return (
    <div className="Layout">
      <header>
        <Header />
      </header>

      <main>
        <Main />
      </main>
    </div>
  );
}

export default Layout;
