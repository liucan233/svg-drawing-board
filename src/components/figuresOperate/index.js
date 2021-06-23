import "./index.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Figures from "../../utils/figuresOperateUtil";

function FiguresOperate() {
  const newAction = useDispatch();
  const [cancel, setCancel] = useState(true);
  const [recover, setRecover] = useState(false);
  const state = useSelector((state) => state);

  function handleCancel() {
    if (!cancel) return;
    newAction({ type: "BACK_TO" });
  }
  function handleRecover() {
    if (!recover) return;
    newAction({ type: "RECOVER_TO" });
  }
  function handleClear() {
    if (!cancel) return;
    newAction({ type: "CLEAR_FIGURES" });
  }
  useEffect(
    function () {
      if (Figures.cancelStack.length > 1) setCancel(true);
      else setCancel(false);
      if (Figures.recoveryStack.length) setRecover(true);
      else setRecover(false);
    },
    [state]
  );
  return (
    <div className="tool-operate">
      <svg
        className="tool-bar-item"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        data-active={cancel}
        onClick={handleCancel}
      >
        <path
          d="M452.266667 413.866667V305.066667a25.173333
          25.173333 0 0 0-40.106667-20.906667L145.066667
          469.333333a25.6 25.6 0 0 0 0 42.666667l267.093333
          186.453333a25.6 25.6 0 0 0 40.106667-21.333333V610.133333a25.6
          25.6 0 0 1 26.88-25.6 341.333333 341.333333 0 0 1 301.653333 263.68
          336.64 336.64 0 0 0-304.213333-409.173333 25.173333 25.173333 0 0 1-24.32-25.173333z"
        />
      </svg>

      <svg
        className="tool-bar-item"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        data-active={recover}
        onClick={handleRecover}
      >
        <path
          d="M512 371.2V261.973333a25.6 25.6 0 0 1 40.106667-20.906666L819.2
        426.666667a25.6 25.6 0 0 1 0 42.666666l-267.093333 186.453334a25.6 25.6 0
        0 1-40.106667-20.906667V567.466667a25.173333 25.173333 0 0 0-26.88-25.6
        341.333333 341.333333 0 0 0-301.653333 263.68 336.64 336.64 0 0 1 304.64-409.173334
        25.173333 25.173333 0 0 0 23.893333-25.173333z"
        />
      </svg>
      <span className="tool-bar-item tool-clear" onClick={handleClear}>
        清空画布
      </span>
    </div>
  );
}

export default FiguresOperate;
