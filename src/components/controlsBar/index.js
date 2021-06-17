import "./index.css";
import React from "react";
import ColorSelector from "../colorSelector";
import FigureSelector from "../figureSelector";
import PropsSelector from "../propsSelector";
import Modal from "../../utils/modalUtil";

function ToolBar({ svgStyle, setProps, figures }) {
  function showMore() {
    Modal.moreSetting(figures);
  }
  return (
    <div className="tool-bar">
      <ColorSelector setProps={setProps} svgStyle={svgStyle} />
      <span className="tool-space" />
      <FigureSelector setProps={setProps} svgStyle={svgStyle} />
      <span className="tool-space" />
      <PropsSelector setProps={setProps} svgStyle={svgStyle} />
      <span className="more-setting" onClick={showMore}>
        关于
      </span>
    </div>
  );
}

export default ToolBar;
