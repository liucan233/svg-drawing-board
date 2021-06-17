import React from "react";
import ReactDOM from "react-dom";
import MoreSetting from "../components/moreSetting";

function moreSetting(handleDestroy) {
  const state = {};
  const container = document.getElementById("setting");

  function destroy() {
    handleDestroy(state);
    ReactDOM.unmountComponentAtNode(container);
  }

  function handleChange() {}

  ReactDOM.render(
    <MoreSetting destroy={destroy} onChange={handleChange} />,
    container
  );
}

const Modal = { moreSetting };

export default Modal;
