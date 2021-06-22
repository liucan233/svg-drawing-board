import "./index.css";
import React from "react";
import ColorSelector from "../colorSelector";
import FigureSelector from "../figureSelector";
import PropsSelector from "../propsSelector";

function ToolBar() {
  return (
    <div className="tool-bar-wrap">
      <div className="tool-bar">
        <ColorSelector />
        <FigureSelector />
        <PropsSelector />
      </div>
    </div>
  );
}

export default ToolBar;
