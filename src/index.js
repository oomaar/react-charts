import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { DefaultStyles } from "./Global";
render(
  <>
    <DefaultStyles />
    <App />
  </>,
  document.getElementById("root")
);
