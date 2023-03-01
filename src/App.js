import { useState } from "react";
import "./App.css";
import BackThisProject from "./BackThisProject";
import BookCount from "./BookCount";
import Hero from "./Hero";
import ProjectDetails from "./ProjectDetails";

function App() {
  const [toggleModel, setToggleModel] = useState(false);

  function DisplayModel() {
    setToggleModel(!toggleModel);
  }

  return (
    <div className="App">
      <Hero />
      <BookCount DisplayModel={DisplayModel} />
      <ProjectDetails />
      <BackThisProject
        toggleModel={toggleModel}
        setToggleModel={setToggleModel}
      />
    </div>
  );
}

export default App;
