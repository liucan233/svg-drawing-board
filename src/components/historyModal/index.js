import "./index.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function HistoryModal() {
  const newAction = useDispatch();
  const { historyModal } = useSelector((state) => state);

  function handleClick({ target }) {
    if (target.className === "modal-wrap")
      newAction({ type: "CHANGE_HISTORY_MODAL" });
  }

  return (
    <div
      className="modal-wrap"
      data-active={historyModal}
      onClick={handleClick}
    >
      <div className={"modal"} data-active={historyModal}>
        <h1>继续上次的工作</h1>
      </div>
    </div>
  );
}

export default HistoryModal;
