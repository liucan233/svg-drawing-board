import "./index.css";
import React from "react";

function MoreSetting({ show }) {
  this.test = function test() {
    console.log(this);
  };
  return <div className={`more-tool${show ? " more-active" : ""}`}></div>;
}

export default MoreSetting;
