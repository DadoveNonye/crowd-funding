import React from "react";
import Bookmark from "./Components/Bookmark";
import Countdown from "./Components/countdown";

export default function BookCount({ DisplayModel }) {
  return (
    <div className="Bookcount">
      <Bookmark DisplayModel={DisplayModel} />
      <Countdown />
    </div>
  );
}
