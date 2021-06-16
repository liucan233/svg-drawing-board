import "./index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import MoreSetting from "../moreSetting";

function PropsSelector({ svgStyle, setProps }) {
  const [width, setWidth] = useState("5");
  const [show, setShowMore] = useState(false);

  function handleOnchange({ target }) {
    setWidth(target.value);
  }

  function handleBlur({ target }) {
    if (!target.value) setWidth(svgStyle.width);
    else {
      const newWidth = Number(target.value);
      setProps({ ...svgStyle, width: newWidth });
    }
  }

  function handleShow() {
    console.log(ReactDOM);
    // ReactDOM.createPortal(MoreSetting,);
  }

  function handleFill({ target }) {
    if (target.checked) setProps({ ...svgStyle, fill: svgStyle.color });
    else setProps({ ...svgStyle, fill: "transparent" });
  }

  return (
    <div className="props-selector">
      <span className="props-stroke">
        <label htmlFor="stroke-width">
          <span>线宽：</span>
        </label>
        <input
          value={width}
          id="stroke-width"
          onBlur={handleBlur}
          onChange={handleOnchange}
          type="number"
          max={20}
          min={1}
        />
      </span>

      <span className="props-fill">
        <label htmlFor="fill">
          <span>封闭：</span>
        </label>
        <input id="fill" type="checkbox" onChange={handleFill} />
      </span>

      <span onClick={handleShow} className="props-clear">
        更多
      </span>
    </div>
  );
}

export default PropsSelector;
