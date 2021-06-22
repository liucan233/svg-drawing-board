import "./index.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function PropsSelector() {
  const newAction = useDispatch();
  const { drawingStyle, figures } = useSelector((state) => state);

  function handleOnchange({ target }) {
    drawingStyle.width = Number(target.value);
    newAction({ type: "SET_DRAWING_STYLE", style: drawingStyle });
  }

  function handleFill({ target }) {
    drawingStyle.fill = target.checked ? drawingStyle.color : "transparent";
    newAction({ type: "SET_DRAWING_STYLE", style: drawingStyle });
  }

  function handleSave() {
    const figuresStr = JSON.stringify(figures);
    localStorage.setItem("figures", figuresStr);
    console.log(figuresStr);
  }

  function handleClear() {
    newAction({ type: "CLEAR_SVG" });
  }

  function handleCancel() {
    console.log("撤销");
    newAction({ type: "CANCEL_ADD" });
  }

  function handleBack() {
    console.log("恢复");
    newAction({ type: "BACK_TO" });
  }

  return (
    <div className="props-selector">
      <span className="props-stroke">
        <label htmlFor="stroke-width">
          <span>线宽：</span>
        </label>
        <input
          value={drawingStyle.width}
          id="stroke-width"
          onChange={handleOnchange}
          type="range"
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

      <span className="props-cancel" onClick={handleCancel}>
        撤销
      </span>
      <span className="props-back" onClick={handleBack}>
        恢复
      </span>
      <span className="props-clear" onClick={handleClear}>
        清空画布
      </span>
      <span className="props-save" onClick={handleSave}>
        保存作品
      </span>
    </div>
  );
}

export default PropsSelector;
