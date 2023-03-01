import React, { useState } from "react";
import MastercraftLogo from "../Img/logo-mastercraft.svg";
import bookmarkIcon from "../Img/icon-bookmark.svg";

export default function Bookmark({ DisplayModel }) {
  return (
    <div className="master">
      <img src={MastercraftLogo}></img>
      <h2>Mastercraft Bamboo Monitor Riser</h2>
      <p>
        A beautiful and handcrafted monitor stand to reduce neck and eye strain
      </p>
      <div className="mastercraftBtn">
        <button onClick={DisplayModel} className="backprojectbtn">
          Back this project
        </button>
        <button className="bookmarkbtn">
          <span>
            <img src={bookmarkIcon} className="iconbookmark"></img>
          </span>
          Bookmark
        </button>
      </div>
    </div>
  );
}
