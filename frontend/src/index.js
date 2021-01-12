import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import { Provider } from "react-redux";
import Store from "./store";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
