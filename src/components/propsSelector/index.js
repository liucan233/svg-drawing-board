import "./index.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function PropsSelector() {
  const newAction = useDispatch();
  const { drawingStyle } = useSelector((state) => state);

  function handleOnchange({ target }) {
    drawingStyle.width = Number(target.value);
    newAction({ type: "SET_DRAWING_STYLE", style: drawingStyle });
  }

  function handleFill({ target }) {
    drawingStyle.fill = target.checked ? drawingStyle.color : "transparent";
    newAction({ type: "SET_DRAWING_STYLE", style: drawingStyle });
  }

  return (
    <div className="props-selector">
      <span className="tool-bar-item">
        <span>粗细：</span>
        <input
          value={drawingStyle.width}
          id="range"
          onChange={handleOnchange}
          type="range"
          max={20}
          min={1}
        />
      </span>

      <span className="tool-bar-item">
        <label htmlFor="fill">
          <span>填充：</span>
        </label>
        <input id="checkbox" type="checkbox" onChange={handleFill} />
      </span>
    </div>
  );
}

export default PropsSelector;
