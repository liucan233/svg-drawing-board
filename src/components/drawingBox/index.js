import "./index.css";
import React, { useState } from "react";

function DrawingBox() {
  const [figures, setFigures] = useState([]);
  const [onPainting, changePainting] = useState(false);

  function handleMouseDown(e) {
    const { nativeEvent } = e;
    figures.push({
      type: "line",
      path: `M${nativeEvent.offsetX} ${nativeEvent.offsetY}`,
    });
    changePainting(true);
  }

  function handleMouseMove(e) {
    const { nativeEvent } = e;
    const topSvgChild = figures.pop();
    topSvgChild.path += `L${nativeEvent.offsetX} ${nativeEvent.offsetY}`;
    figures.push(topSvgChild);
    setFigures([...figures]);
  }

  function handleMoseUp() {
    changePainting(false);
  }

  function createSvgChild(item, index) {
    const { type, path } = item;
    switch (type) {
      case "line":
        return (
          <path
            stroke="orange"
            strokeWidth="5"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
            d={path}
            key={index}
          />
        );
      // case 'circle':

      default:
        return;
    }
  }

  // useEffect(function () {
  //     console.log('组件更新完成')
  // },[figures])

  return (
    <div className="drawing-box">
      <svg
        onMouseDown={handleMouseDown}
        onMouseUp={handleMoseUp}
        onMouseLeave={handleMoseUp}
        onMouseMove={onPainting ? handleMouseMove : null}
      >
        {figures.map((item, index) => {
          return createSvgChild(item, index);
        })}
      </svg>
    </div>
  );
}
export default DrawingBox;
