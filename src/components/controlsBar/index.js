import "./index.css";
import React, { useEffect, useRef } from "react";
import ColorSelector from "../colorSelector";
import FigureSelector from "../figureSelector";
import PropsSelector from "../propsSelector";
import FiguresOperate from "../figuresOperate";
import SaveWork from "../saveWork";

function ToolBar() {
  const wrapRef = useRef();
  function handleWheel(e) {
    const { current } = wrapRef;
    e.stopPropagation();
    current.scrollTo({
      left: ~~(current.scrollLeft + e.deltaY * 0.5),
      // behavior: 'smooth'
    });
    // current.scrollLeft+=e.deltaY*0.5;
  }
  return (
    <div className="tool-bar-wrap" onWheel={handleWheel} ref={wrapRef}>
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
