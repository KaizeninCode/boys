import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import MissionVision from "./components/MissionVision";
import Contact from "./components/Contact";
import Programs from "./components/Programs";

const Main = () => {
  return (
    <main>
      <Home/>
      <About/>
      <MissionVision/>
      <Programs/>
      <Contact/>
    </main>
  );
};

export default Main;
