import "./index.css";
import React from "react";
import SvgSaver from "@sedan-utils/svgsaver";
import { useDispatch, useSelector } from "react-redux";

function SaveModal() {
  const newAction = useDispatch();
  const { saveModal } = useSelector((state) => state);

  function handleClick({ target }) {
    if (target.className === "modal-wrap")
      newAction({ type: "CHANGE_SAVE_MODAL" });
  }

  function handleExport({ target }) {
    const svg = document.querySelector(".drawing-box");
    svg.setAttribute("width", svg.clientWidth.toString());
    const svgDownloader = new SvgSaver();
    target.innerText === "PNG"
      ? svgDownloader.asPng(svg, `works-${Date.now()}.png`)
      : svgDownloader.asSvg(svg, `works-${Date.now()}.svg`);
    console.log(svgDownloader);
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

        <h3>保存进度</h3>
        <div className="export-item">
          <input
            placeholder="请输入作品名称，非必填"
            className="export-item-name name-input"
          />
          <span className="export-btn">保存</span>
        </div>
      </div>
    </div>
  );
}

export default SaveModal;
