import React from "react";
import ReactDOM from "react-dom";
import "./index.module.scss";
import Root from "./views/Root/Root";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter basename="/testowe">
    <Root />
  </HashRouter>,
  document.getElementById("root")
);
