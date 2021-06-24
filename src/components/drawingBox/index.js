import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import React, { Fragment, useState } from "react";
import { createLine } from "../../utils/createLineUtil";
import { createPath } from "../../utils/createPathUtil";
import { createRect } from "../../utils/createRectUtil";
import { createCircle } from "../../utils/createCircleUtil";
import { createTriangle } from "../../utils/createTriangleUtil";
import { createBessel } from "../../utils/createBesselUtil";
import createSvgChildUtil from "../../utils/createSvgChildUtil";

let onTouch = false;
let onPainting = false;
let updated = false;

function DrawingBox() {
  const newAction = useDispatch();
  const [figure, setFigure] = useState({});
  const { drawingStyle } = useSelector((state) => state);
  const { figures } = useSelector((state) => state);

  function handleMouseDown(e) {
    onPainting = true;
    const { nativeEvent } = e;
    const { color, width, fill } = drawingStyle;
    figure.color = color;
    figure.width = width;
    figure.fill = fill;
    figure.path = "";
    figure.type = drawingStyle.type;
    figure.key = Date.now();
    figure.downX = nativeEvent.offsetX;
    figure.downY = nativeEvent.offsetY;
  }

  function updateComponent() {
    updated = false;
    setFigure({ ...figure });
  }

  function handleMouseMove(e) {
    if (!onPainting) return;
    figure.flag = true;
    let handleDrawing = function () {};
    const { type } = drawingStyle;
    if (type === "path") handleDrawing = createPath;
    else if (type === "line") handleDrawing = createLine;
    else if (type === "rect") handleDrawing = createRect;
    else if (type === "circle") handleDrawing = createCircle;
    else if (type === "triangle") handleDrawing = createTriangle;
    else if (type === "arc") handleDrawing = createBessel;
    handleDrawing(e, figure);
    if (!updated) {
      updated = true;
      requestAnimationFrame(updateComponent);
    }
  }

  function handleMoseUp() {
    if (onTouch) return;
    onPainting = false;
    if (!figure || !figure.flag) return;
    setFigure({ type: "empty" });
    newAction({ type: "ADD_NEW_FIGURE", figure });
  }

  function touchToMouse(e) {
    const {
      touches: [{ clientX, clientY }],
    } = e;
    return { nativeEvent: { offsetX: clientX, offsetY: clientY } };
  }

  function handleTouchEnd(e) {
    e.preventDefault();
    onTouch = false;
    handleMoseUp();
  }

  function handleTouchMove(e) {
    if (onTouch) {
      handleMouseMove(touchToMouse(e));
    } else {
      onTouch = true;
      handleMouseDown(touchToMouse(e));
    }
  }

  return (
    <svg
      className="drawing-box"
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMoseUp}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMoseUp}
      style={{ backgroundColor: "#f9f4ef" }}
    >
      {figures.map((item) => createSvgChildUtil(item))}
      {createSvgChildUtil(figure)}
    </svg>
  );
}
export default DrawingBox;
