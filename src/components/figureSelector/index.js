import "./index.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function FigureSelector() {
  const newAction = useDispatch();
  const { drawingStyle } = useSelector((state) => state);
  const [active, setActive] = useState("path");

  function handleClick({ target }) {
    const { dataset } = target;
    if (dataset.type === active) return;
    setActive(dataset.type);
    console.log(dataset.type);
    newAction({
      type: "SET_DRAWING_STYLE",
      style: { ...drawingStyle, type: dataset.type },
    });
  }
  return (
    <div
      className="figure-selector"
      onClick={handleClick}
      style={{ "--fillColor": drawingStyle.color }}
    >
      <svg
        viewBox="0 0 1280 1024"
        // fill={drawingStyle.color}
        xmlns="http://www.w3.org/2000/svg"
        data-type="path"
        className={
          active === "path" ? "tool-bar-item item-active" : "tool-bar-item"
        }
      >
        <path d="M1280 614.4c0-32-32-64-64-64-38.4 0-64 32-64 64 0 44.8-12.8 172.8-70.4 236.8-32 32-70.4 44.8-121.6 44.8-89.6 0-153.6-243.2-204.8-416-64-249.6-128-480-294.4-480C224 0 115.2 364.8 44.8 601.6c-12.8 51.2-25.6 96-38.4 121.6-12.8 32 6.4 70.4 38.4 83.2 32 12.8 70.4-6.4 83.2-38.4 12.8-32 25.6-76.8 44.8-134.4C217.6 460.8 320 128 460.8 128 531.2 128 595.2 358.4 640 512c70.4 249.6 140.8 512 326.4 512 83.2 0 153.6-25.6 204.8-83.2 115.2-121.6 108.8-320 108.8-326.4z" />
      </svg>
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        // fill={drawingStyle.color}
        data-type="triangle"
        className={
          active === "triangle" ? "tool-bar-item item-active" : "tool-bar-item"
        }
      >
        <path d="M928.64 896a2.144 2.144 0 0 1-0.64 0H96a32.032 32.032 0 0 1-27.552-48.288l416-704c11.488-19.456 43.552-19.456 55.104 0l413.152 699.2A31.936 31.936 0 0 1 928.64 896zM152.064 832h719.84L512 222.912 152.064 832z" />
      </svg>
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        data-type="circle"
        className={
          active === "circle" ? "tool-bar-item item-active" : "tool-bar-item"
        }
      >
        <path d="M511.99 960.22C264.84 960.22 63.77 759.15 63.77 512S264.84 63.78 511.99 63.78 960.23 264.85 960.23 512 759.14 960.22 511.99 960.22z m0-823.81C304.88 136.41 136.4 304.89 136.4 512s168.48 375.59 375.59 375.59c207.13 0 375.61-168.48 375.61-375.59S719.12 136.41 511.99 136.41z" />
      </svg>
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        data-type="rect"
        className={
          active === "rect" ? "tool-bar-item item-active" : "tool-bar-item"
        }
      >
        <path d="M841.34 959.36H182.66c-65.06 0-117.99-52.94-117.99-118.02V182.69c0-65.08 52.94-118.04 117.99-118.04h658.68c65.06 0 117.99 52.96 117.99 118.04v658.65c0 65.08-52.93 118.02-117.99 118.02zM182.66 142.17c-22.31 0-40.51 18.18-40.51 40.51v658.65c0 22.34 18.2 40.49 40.51 40.49h658.68c22.31 0 40.51-18.15 40.51-40.49V182.69c0-22.34-18.2-40.51-40.51-40.51H182.66z" />
      </svg>
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        data-type="line"
        className={
          active === "line" ? "tool-bar-item item-active" : "tool-bar-item"
        }
      >
        <path d="M197.333333 766.293333l568.746667-568.661333 60.330667 60.330667-568.746667 568.746666z" />
      </svg>
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        data-type="arc"
        className={
          active === "arc" ? "tool-bar-item item-active" : "tool-bar-item"
        }
      >
        <path d="M804.5 835.4375L720.828125 728.5625c109.6875-105.46875 123.75-279.84375 27.421875-401.484375-103.359375-130.078125-291.796875-152.578125-421.875-49.921875s-151.875 291.796875-49.21875 421.875c9.140625 11.25 18.28125 21.796875 28.828125 31.640625l-83.671875 106.171875c-18.28125-16.171875-35.15625-34.453125-51.328125-54.140625C21.921875 594.265625 54.265625 320.046875 242.703125 171.6875S704.65625 54.96875 853.71875 243.40625c142.734375 180.703125 118.828125 439.453125-49.21875 592.03125z" />
      </svg>
    </div>
  );
}

export default FigureSelector;
