import "./index.css";
import React, { useState } from "react";
import SvgSaver from "@sedan-utils/svgsaver";
import { useDispatch, useSelector } from "react-redux";
import Figures from "../../utils/figuresOperateUtil";
import saveToIndexDb from "../../utils/saveToIndexDbUtil";

function SaveModal() {
  const newAction = useDispatch();
  const { project } = useSelector((state) => state);
  const { saveModal } = useSelector((state) => state);
  const [warning, setWarning] = useState({ download: "", saveProject: "" });

  function handleClick({ target }) {
    if (target.className === "modal-wrap") {
      setWarning({ download: "", saveProject: "" });
      newAction({ type: "CHANGE_SAVE_MODAL" });
    }
  }

  function handleExport({ target }) {
    const svg = document.querySelector(".drawing-box");
    svg.setAttribute("width", svg.clientWidth.toString());
    const svgDownloader = new SvgSaver();
    target.innerText === "PNG"
      ? svgDownloader.asPng(svg, `works-${Date.now()}.png`)
      : svgDownloader.asSvg(svg, `works-${Date.now()}.svg`);
    warning.download = "导出成功咯，快去打开看看吧！";
    setWarning({ ...warning });
  }

  function handleSave() {
    const { length } = Figures.cancelStack;
    if (length < 2) {
      warning.saveProject = "画板为空或你未做任何更改哦，稍后再来吧！";
      setWarning({ ...warning });
      return;
    }
    let { id, name } = project;
    const now = new Date();
    if (!id) id = now.getTime();
    const svg = document.querySelector(".drawing-box");
    svg.setAttribute("width", svg.clientWidth.toString());
    const svgDownloader = new SvgSaver();
    if (!name) name = "works-undefined-name";
    const data = {
      id,
      name,
      date: now.toLocaleString(),
      preview: svgDownloader.getUri(svg),
      figures: Figures.cancelStack[length - 1],
    };
    newAction({ type: "SET_PROJECT", project: data });
    saveToIndexDb(data, handleSuccess, handleError);
  }

  function handleSuccess() {
    warning.saveProject = "成功保存到indexDb数据库咯！";
    setWarning({ ...warning });
  }

  function handleError() {
    warning.saveProject = "项目保存失败，请到GitHub提交issue";
    setWarning({ ...warning });
  }

  function handleChange({ target }) {
    newAction({
      type: "SET_PROJECT",
      project: { ...project, name: target.value },
    });
  }

  return (
    <div className="modal-wrap" data-active={saveModal} onClick={handleClick}>
      <div className={"modal"} data-active={saveModal}>
        <h1>保存作品</h1>
        <h3>导出作品</h3>
        <div className="export-item">
          <span className={"export-item-name"}>导出为PNG/SVG</span>
          <span className="export-btn" onClick={handleExport}>
            PNG
          </span>
          <span className="export-btn" onClick={handleExport}>
            SVG
          </span>
        </div>
        <p className="save-tips" data-active={!!warning.download}>
          {warning.download}
        </p>

        <h3>保存进度</h3>
        <div className="export-item">
          <input
            value={project.name}
            onChange={handleChange}
            placeholder="请输入作品名称，非必填"
            className="export-item-name name-input"
          />
          <span className="export-btn" onClick={handleSave}>
            保存
          </span>
        </div>
        <p className="save-tips" data-active={!!warning.saveProject}>
          {warning.saveProject}
        </p>
      </div>
    </div>
  );
}

export default SaveModal;
