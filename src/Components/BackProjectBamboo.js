import React, { useState } from "react";

export default function BackProjectBamboo() {
  const [isChecked, setIsChecked] = useState(false);
  function uuu() {
    setIsChecked(!isChecked);
    isChecked ? console.log("checkedd") : console.log("notchecked");
  }
  return (
    <div className="borderwrap">
      <div className="flexcol">
        <div className="flex autoalign pad">
          <input type={"checkbox"} onChange={uuu} checked={isChecked} />
          <h3>Bamboo stand </h3>
          <h4>Pledge with $25 or more</h4>
          <h2>101 left</h2>
        </div>
        <p>
          You get an ergnomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you'll be added to a special
          Backer list
        </p>
      </div>
      <div className={"flex pad"} id={isChecked ? "showModel" : "removeModel"}>
        <p>Enter your pledge</p>
        <input type={"text"} />
        <button>continue</button>
      </div>
    </div>
  );
}
