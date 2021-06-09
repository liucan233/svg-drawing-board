import "./index.css";
import React from "react";

function PropsSelector() {
  return (
    <div className="props-selector">
      <span className="props-stroke">
        <label htmlFor="stroke-width">
          <span>线宽：</span>
        </label>
        <input id="stroke-width" type="number" max={20} min={1} />
      </span>

      <span className="props-fill">
        <label htmlFor="fill">
          <span>封闭：</span>
        </label>
        <input id="fill" type="checkbox" />
      </span>

      <span className="props-clear">更多</span>
    </div>
  );
}

export default PropsSelector;
