import "./index.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function SaveWork() {
  const newAction = useDispatch();

  function handleSave() {
    newAction({ type: "CHANGE_SAVE_MODAL" });
  }

  function handleHistory() {
    newAction({ type: "CHANGE_HISTORY_MODAL" });
  }
  return (
    <div className="save-work">
      <span className="tool-bar-item tool-history" onClick={handleHistory}>
        历史
      </span>
      <span className="tool-bar-item tool-save" onClick={handleSave}>
        保存
      </span>
    </div>
  );
}

export default SaveWork;
