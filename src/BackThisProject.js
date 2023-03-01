import React from "react";
import BackProjectBamboo from "./Components/BackProjectBamboo";
import BackprojectBlack from "./Components/BackprojectBlack";
import Mahogany from "./Components/Mahogany";
import PledgeWithoutReward from "./Components/PledgeWithoutReward";
import CloseModel from "./Img/icon-close-modal.svg";

export default function BackThisProject({ toggleModel, setToggleModel }) {
  function RemoveMod() {
    setToggleModel(!toggleModel);
  }
  return (
    <div
      className="Backthisproject"
      id={toggleModel ? "showModel" : "removeModel"}
    >
      <div className="thispro">
        <h3>Back this project</h3>
        <img src={CloseModel} onClick={RemoveMod} />
      </div>
      <p className="support-master">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser in the
        world?
      </p>
      <PledgeWithoutReward />
      <BackProjectBamboo />
      <BackprojectBlack />
      <Mahogany />
    </div>
  );
}
