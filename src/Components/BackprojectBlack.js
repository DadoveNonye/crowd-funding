import React from "react";

export default function BackprojectBlack() {
  return (
    <div>
      <div className="flexcol borderwrap">
        <div className="flex autoalign pad">
          <input type={"checkbox"} />
          <h3>Black Edition stand </h3>
          <h4>Pledge with $75 or more</h4>
          <h2>64 left</h2>
        </div>
        <p>
          You get a Black Special Edition computer stand and a personal thank
          you. You will be added to the Backer list, shipping included.
        </p>
      </div>

      <div className="flex pad">
        <p>Enter your pledge</p>
        <input />
        <button>continue</button>
      </div>
    </div>
  );
}
