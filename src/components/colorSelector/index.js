import "./index.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const colors = ["#ff776d", "#020826", "#8c7851", "#008eff", "orange"];

function ColorSelector() {
  const newAction = useDispatch();
  const { drawingStyle } = useSelector((state) => state);

  function handleClick({ target }) {
    const { dataset } = target;
    if (!dataset.color) return;
    drawingStyle.color = dataset.color;
    if (drawingStyle.fill !== "transparent") drawingStyle.fill = dataset.color;
    newAction({ type: "SET_DRAWING_STYLE", style: drawingStyle });
  }
  return (
    <div className="color-selector" onClick={handleClick}>
      {colors.map((item, index) => {
        return (
          <span
            className="tool-bar-item"
            style={{ backgroundColor: item }}
            data-color={item}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default ColorSelector;
