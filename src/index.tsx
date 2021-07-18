import React from "react";
import ReactDOM from "react-dom";

import { StoreCtx, store } from "./store";

import App from "./App";

import "./styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <StoreCtx.Provider value={store}>
      <App />
    </StoreCtx.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
