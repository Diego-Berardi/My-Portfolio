import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/index.scss";
import App from "./App";

import { AppProvider } from "./context";
import "animate.css";


ReactDOM.render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>,
  document.getElementById("root")
);
