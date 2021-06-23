import "./App.css";
import React, { Fragment } from "react";
import DrawingBox from "./components/drawingBox";
import ToolBar from "./components/controlsBar";
import HistoryModal from "./components/historyModal";
import SaveModal from "./components/saveModal";

function App() {
  return (
    <Fragment>
      <DrawingBox />
      <ToolBar />
      <HistoryModal />
      <SaveModal />
    </Fragment>
  );
}

export default App;
