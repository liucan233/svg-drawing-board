import "./index.css";
import React from "react";
import ColorSelector from "../colorSelector";
import FigureSelector from "../figureSelector";
import PropsSelector from "../propsSelector";

function ToolBar() {
  return (
    <div className="tool-bar">
      <ColorSelector />
      <span className="tool-space" />
      <FigureSelector />
      <span className="tool-space" />
      <PropsSelector />
    </div>
  );
}

export default ToolBar;
