import React from "react";
import ReactDOM from "react-dom";
import MoreSetting from "../components/moreSetting";

function moreSetting(figures) {
  const container = document.getElementById("setting");

  function destroy() {
    ReactDOM.unmountComponentAtNode(container);
  }

  ReactDOM.render(
    <MoreSetting destroy={destroy} figures={figures} />,
    container
  );
}

const Modal = { moreSetting };

export default Modal;
