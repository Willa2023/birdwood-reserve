import React from "react";
import Home from "./Home";
import About from "./About";
import Donate from "./Donate";
import Sponsors from "./Sponsors";

function MainSection() {
  return (
    <main className="main">
      <Home />
      <About />
      <Donate />
      <Sponsors />
    </main>
  );
}

export default MainSection;
