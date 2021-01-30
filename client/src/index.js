import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");

render(
  <StrictMode>
    <App />
  </StrictMode>,
  container
);
