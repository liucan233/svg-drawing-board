import "./index.css";
import React, { useState } from "react";

function ColorSelector() {
  let [colors, setColors] = useState([
    "#f25042",
    "#020826",
    "#8c7851",
    "#008eff",
    "orange",
  ]);
  return (
    <div className="color-selector">
      {colors.map((item, index) => {
        return <span style={{ backgroundColor: item }} key={index} />;
      })}
    </div>
  );
}

export default ColorSelector;
