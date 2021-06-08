import "./App.css";
import { Fragment } from "react";
import ToolBar from "./components/controlsBar";
import DrawingBox from "./components/drawingBox";

function App() {
  return (
    <Fragment>
      <DrawingBox />
      <ToolBar />
    </Fragment>
  );
}

export default App;