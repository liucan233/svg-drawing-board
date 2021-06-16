import "./index.css";
import React, { useState } from "react";

function ColorSelector({ svgStyle, setProps }) {
  let [colors, setColors] = useState([
    "#ff776d",
    "#020826",
    "#8c7851",
    "#008eff",
    "orange",
  ]);
  function handleClick({ target }) {
    const { dataset } = target;
    if (!dataset.color) return;
    if (svgStyle.fill !== "transparent") svgStyle.fill = dataset.color;
    setProps({ ...svgStyle, color: dataset.color });
  }
  return (
    <div className="color-selector" onClick={handleClick}>
      {colors.map((item, index) => {
        return (
          <span
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
