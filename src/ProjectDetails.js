import React from "react";
import About from "./Components/About";
import BlackEdition from "./Components/BlackEdition";
import Mahogany from "./Components/Mahogany";
import Bamboo from "./Components/Bamboo";

export default function ProjectDetails() {
  return (
    <div className="projectdetails">
      <About />
      <Bamboo />
      <BlackEdition />
      <Mahogany />
    </div>
  );
}
