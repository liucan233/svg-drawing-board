import "./index.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import readIndexDb from "../../utils/readIndexDbUtil";
import deleteItem from "../../utils/deleteItemUtil";

function HistoryModal() {
  const newAction = useDispatch();
  const [projects, setProjects] = useState([]);
  const { historyModal } = useSelector((state) => state);

  function handleClick({ target }) {
    if (target.className === "modal-wrap")
      newAction({ type: "CHANGE_HISTORY_MODAL" });
  }

  function handleSuccess(data) {
    setProjects(data);
  }

  function handleError() {}

  function handleOpen({ target }) {
    newAction({ type: "CHANGE_HISTORY_MODAL" });
    const tar = projects[target.dataset.index];
    if (!tar.id) return;
    newAction({ type: "CHANGE_PROJECT", project: tar });
  }

  function handleDelete({ target }) {
    deleteItem(
      projects[target.dataset.index].id,
      function () {
        projects[target.dataset.index].remove = true;
        setProjects([...projects]);
      },
      function (event) {
        console.log(event);
      }
    );
  }

  useEffect(
    function () {
      if (historyModal) readIndexDb(handleSuccess, handleError);
    },
    [historyModal]
  );

  return (
    <div
      className="modal-wrap"
      data-active={historyModal}
      onClick={handleClick}
    >
      <div className="modal" data-active={historyModal}>
        <h1>继续上次的工作</h1>
        {projects.map((item, index) => {
          const { id, preview, date, name, remove } = item;
          return (
            <div className="history-project-wrap" key={id} data-remove={remove}>
              <div className="history-project">
                <div className="project-preview">
                  <img src={preview} />
                </div>
                <div className="project-details">
                  <h3>{name}</h3>
                  <h4>{date}</h4>
                  <div className="project-btn">
                    <span
                      className="project-delete"
                      onClick={handleDelete}
                      data-index={index}
                    >
                      删除
                    </span>
                    <span onClick={handleOpen} data-index={index}>
                      打开
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HistoryModal;
