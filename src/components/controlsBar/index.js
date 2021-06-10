import "./index.css";
import React from "react";
import ColorSelector from "../colorSelector";
import FigureSelector from "../figureSelector";
import PropsSelector from "../propsSelector";

function ToolBar({ svgStyle, setProps }) {
  return (
    <div className="tool-bar">
      <ColorSelector setProps={setProps} svgStyle={svgStyle} />
      <span className="tool-space" />
      <FigureSelector setProps={setProps} svgStyle={svgStyle} />
      <span className="tool-space" />
      <PropsSelector setProps={setProps} svgStyle={svgStyle} />
    </div>
  );
}

export default ToolBar;
