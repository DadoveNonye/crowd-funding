import React from "react";

export default function PledgeWithoutReward() {
  return (
    <div className="withoutReward borderwrap">
      <div className="flexcol">
        <div className="flex autoalign pad">
          <input type={"checkbox"}></input>
          <h4>Pledge with no reward</h4>
        </div>
        <p>
          Choose to support us without a reward if you believe our project, as a
          backer, you will be signed up to receive product emails.
        </p>
      </div>
      <div className="flex pad rewardbtn">
        <button>continue</button>
      </div>
    </div>
  );
}
