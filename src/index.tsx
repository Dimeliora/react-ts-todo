import React from "react";
import ReactDOM from "react-dom";

import { StoreCtx } from "./store";
import { todos } from "./store/todos";

import App from "./App";

import "./styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <StoreCtx.Provider value={todos}>
      <App />
    </StoreCtx.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
