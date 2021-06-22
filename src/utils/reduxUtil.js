import { createStore } from "redux";

function handleAction(
  state = {
    figures: [],
    figuresBak: [],
    clearFlag: false,
    drawingStyle: {
      type: "path",
      color: "orange",
      width: 5,
      fill: "transparent",
    },
  },
  action
) {
  const { type } = action;
  if (type === "ADD_NEW_FIGURE") {
    state.figures.push(action.figure);
    state.figuresBak.push(action.figure);
    return { ...state };
  } else if (type === "SET_DRAWING_STYLE") {
    state.drawingStyle = action.style;
    return { ...state };
  } else if (type === "CLEAR_SVG") {
    state.figures = [];
    return { ...state };
  } else if (type === "CANCEL_ADD") {
    state.figures.pop();
    console.log(state.figures);
    return { ...state };
  } else if (type === "BACK_TO") {
    const { figures, figuresBak } = state;
    if (state.clearFlag) state.figures = figuresBak;
    else figures.push(figuresBak[figures.length]);
    return { ...state };
  }
  return state;
}

const store = createStore(handleAction);
export default store;
