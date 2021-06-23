import "./index.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function SaveModal() {
  const newAction = useDispatch();
  const { saveModal } = useSelector((state) => state);

  function handleClick({ target }) {
    if (target.className === "modal-wrap")
      newAction({ type: "CHANGE_SAVE_MODAL" });
  }

  function handleExport() {}

  return (
    <div className="modal-wrap" data-active={saveModal} onClick={handleClick}>
      <div className={"modal"} data-active={saveModal}>
        <h1>保存作品</h1>
        <div className="export-work">
          <span>导出作品</span>
          <span className="export-form">PNG</span>
          <span className="export-form">SVG</span>
        </div>
      </div>
    </div>
  );
}

export default SaveModal;
