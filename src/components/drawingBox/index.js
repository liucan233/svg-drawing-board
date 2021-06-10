import "./index.css";
import React, { Fragment, useState } from "react";
import ToolBar from "../controlsBar";
import { createLine, renderLine } from "../../utils/createLineUtil";
import { createPath, renderPath } from "../../utils/createPathUtil";

function DrawingBox() {
  const [figures, setFigures] = useState([]);
  const [onPainting, changePainting] = useState(false);
  const [drawingProps, setDrawingProps] = useState({
    type: "path",
    color: "orange",
    width: 5,
    fill: "transparent",
  });

  function handelMouseDown(e) {
    changePainting(true);
    const { nativeEvent } = e;
    const { color, width, fill } = drawingProps;
    figures.push({
      type: drawingProps.type,
      key: Date.now(),
      color,
      width,
      fill,
      downX: nativeEvent.offsetX,
      downY: nativeEvent.offsetY,
      path: `M${nativeEvent.offsetX} ${nativeEvent.offsetY}`,
    });
  }

  function handleMouseMove(e) {
    let handleDrawing = function () {};
    const { type } = drawingProps;
    if (type === "path") handleDrawing = createPath;
    else if (type === "line") handleDrawing = createLine;
    handleDrawing(e, figures, setFigures);
  }

  function handleMoseUp() {
    changePainting(false);
  }

  function createSvgChild(item, index) {
    const { type } = item;
    let getPath = function () {};
    if (type === "path") getPath = renderPath;
    else if (type === "line") getPath = renderLine;
    return getPath(item);
  }

  // useEffect(function () {
  //     console.log('组件更新完成')
  // },[figures])

  return (
    <Fragment>
      <div className="drawing-box">
        <svg
          onMouseUp={handleMoseUp}
          onMouseLeave={handleMoseUp}
          onMouseDown={handelMouseDown}
          onMouseMove={onPainting ? handleMouseMove : null}
        >
          {figures.map((item, index) => {
            return createSvgChild(item, index);
          })}
        </svg>
      </div>
      <ToolBar svgStyle={drawingProps} setProps={setDrawingProps} />
    </Fragment>
  );
}
export default DrawingBox;
