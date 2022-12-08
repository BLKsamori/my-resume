import "./Portrait.css";
import React from "react";

function Portrait({ myPic }) {
  return (
    <div className="Portrait">
      <div className="myPic">
        <img {...myPic} />
      </div>

      <div className="myPicWrapperA"></div>
      <div className="myPicWrapperB"></div>
    </div>
  );
}

export default Portrait;
