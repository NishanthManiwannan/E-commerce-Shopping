import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux"; //keep track the global state of stored
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
