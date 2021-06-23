import "./index.css";
import React from "react";
import ColorSelector from "../colorSelector";
import FigureSelector from "../figureSelector";
import PropsSelector from "../propsSelector";
import FiguresOperate from "../figuresOperate";
import SaveWork from "../saveWork";

function ToolBar() {
  return (
    <div className="tool-bar-wrap">
      <div className="tool-bar">
        <ColorSelector />
        <FigureSelector />
        <PropsSelector />
        <FiguresOperate />
        <SaveWork />
      </div>
    </div>
  );
}

export default ToolBar;
