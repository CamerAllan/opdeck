import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

import "./index.css";
import Page from "./presentation/PageView";
import App from "./reducers/reducers";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(App, compose(applyMiddleware(thunk), composeWithDevTools()));

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
