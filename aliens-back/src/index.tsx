import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./index.css";
import Page from "./presentation/Page";
import App from "./reducers/reducers";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(App);
ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
