import ReactDOM from "react-dom";
import store from "./reduxUtil";
import { Provider } from "react-redux";

function mountComponent(Component, id) {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById(id)
  );
}

export default mountComponent;
