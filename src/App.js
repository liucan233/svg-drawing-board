import "./App.css";
import React, { Fragment } from "react";
import DrawingBox from "./components/drawingBox";
import ToolBar from "./components/controlsBar";

function App() {
  return (
    <Fragment>
      <DrawingBox />
      <ToolBar />
    </Fragment>
  );
}

export default App;
