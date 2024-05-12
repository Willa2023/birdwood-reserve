import React from "react";
import Home from "./Home";
import About from "./About";
import Discover from "./Discover";
import Places from "./Places";
import Sponsors from "./Sponsors";
import Subscribe from "./Subscribe";
import Video from "./Video";

function MainSection() {
  return (
    <main className="main">
      <Home />
      <About />
      <Discover />
      <Places />
      <Subscribe />
      <Video />
      <Sponsors />
    </main>
  );
}

export default MainSection;
