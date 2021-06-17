import "./index.css";
import React, { Fragment, useState } from "react";

function MoreSetting({ figures, destroy }) {
  const [show, setShow] = useState({
    top: "200px",
    animation: "show ease-in .25s",
  });

  function handleHidden() {
    setShow({
      top: "10px",
      opacity: 0,
      animation: "hidden ease-out .25s",
    });
  }

  function handleAnimationEnd({ animationName }) {
    if (animationName === "hidden") destroy();
  }

  return (
    <Fragment>
      <div className={"more-tool-wrap"} onClick={handleHidden} />
      <div
        className={"more-tool"}
        style={show}
        onAnimationEnd={handleAnimationEnd}
      >
        <h1>关于</h1>
        <p>
          简易的在线画布，能绘制各种图形，包括圆形、矩形、三角形、直线、弧线；
          可以设置图形轮廓线颜色、宽度；可以填充封闭图形，填充可选择颜色，图形可重叠。
        </p>
      </div>
    </Fragment>
  );
}

export default MoreSetting;
