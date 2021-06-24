import { createStore } from "redux";
import Figures from "./figuresOperateUtil";

const defaultState = {
  figures: [],
  drawingStyle: {
    type: "path",
    color: "orange",
    width: 5,
    fill: "transparent",
  },
  historyModal: false,
  saveModal: false,
  project: {
    id: "",
    name: "",
  },
};

function handleAction(state = defaultState, action) {
  const { type } = action;
  if (type === "ADD_NEW_FIGURE") {
    state.figures.push(action.figure);
    Figures.addStatus(state.figures);
    return { ...state };
  } else if (type === "SET_PROJECT") {
    state.project = action.project;
    return { ...state };
  } else if (type === "SET_DRAWING_STYLE") {
    state.drawingStyle = action.style;
    return { ...state };
  } else if (type === "CLEAR_FIGURES") {
    Figures.clearFlag = true;
    state.figures = [];
    return { ...state };
  } else if (type === "BACK_TO") {
    const lastStatus = Figures.backStatus();
    if (lastStatus) {
      state.figures = [...lastStatus];
      return { ...state };
    }
  } else if (type === "RECOVER_TO") {
    const lastStatus = Figures.recStatus();
    if (lastStatus) {
      state.figures = [...lastStatus];
      return { ...state };
    }
  } else if (type === "CHANGE_HISTORY_MODAL") {
    state.historyModal = !state.historyModal;
    return { ...state };
  } else if (type === "CHANGE_SAVE_MODAL") {
    state.saveModal = !state.saveModal;
    return { ...state };
  } else if (type === "CHANGE_PROJECT") {
    const { figures, id, name } = action.project;
    console.log(figures, id, name);
    state.figures = figures;
    state.project.name = name;
    state.project.id = id;
    Figures.clearAllStack();
    Figures.addStatus(state.figures);
    return { ...state };
  }
  return state;
}

const store = createStore(handleAction);
export default store;
